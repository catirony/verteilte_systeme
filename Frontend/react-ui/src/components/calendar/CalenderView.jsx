import React, { useState } from "react";
import Calendar from "react-calendar";
import "./css/Calendar.css";

function CalendarView() {
  const [value, onChange] = useState(new Date());

  return <Calendar className="" onChange={onChange} value={value} />;
}

export default CalendarView;
