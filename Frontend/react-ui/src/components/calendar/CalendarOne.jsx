import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";

const locales = {
  de: require("date-fns/locale/de"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "SomeMeeting",
    allDay: true,
    start: new Date(2021, 6, 1),
    end: new Date(2021, 6, 1),
  },
  {
    title: "WhyDoidothis",
    allDay: true,
    start: new Date(2021, 6, 6),
    end: new Date(2021, 6, 10),
  },
  {
    title: "looking for meaning",
    allDay: true,
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function CalendarOne() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="border d-flex flex-column align-items-center justify-content-center">
      <h1>Kalender</h1>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <h2>Neues Event</h2>

      <div>
        <input
          type="text"
          placeholder="Titel eingeben"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Startdatum"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start: start })}
        />
        <DatePicker
          placeholderText="Enddatum"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end: end })}
        />
        <Button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Event Hinzufuegen
        </Button>
      </div>
    </div>
  );
}

export default CalendarOne;
