// groups, appointments, users

const express = require("express");

// initialize express app
const app = express();

//gib port
const port = 3001;

const appointments = [
  {
    id: 1,
    name: "Appointment 1",
    description: "My Description",
    location: "Downunder",
    date: new Date(3, 2, 1),
    time: "10:00",
    userId: 1,
    groupId: undefined,
  },
];

const users = [
  {
    id: 1,
    name: "User 1",
    email: "",
    password: "",
    groups: [1],
  },
];

const groups = [
  {
    id: 1,
    name: "Group 1",
    description: "My Description",
    memberIDs: [1],
  },
];

// create a new appointment
app.post("/appointments", (req, res) => {
  const newAppointment = req.body;
  newAppointment.id = appointments.length + 1;
  appointments.push(newAppointment);
  res.json(newAppointment);
});

// get all appointments
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

// get appointment by id
app.get("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  const appointment = appointments.find((appointment) => appointment.id === parseInt(appointmentId));
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).json({
      message: "Appointment not found",
    });
  }
});

// delete appointment by id
app.delete("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  const appointmentIndex = appointments.findIndex((appointment) => appointment.id === parseInt(appointmentId));
  if (appointmentIndex !== -1) {
    appointments.splice(appointmentIndex, 1);
    res.json({
      message: "Appointment deleted",
    });
  } else {
    res.status(404).json({
      message: "Appointment not found",
    });
  }
});

// update appointment by id
app.put("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  const appointmentIndex = appointments.findIndex((appointment) => appointment.id === parseInt(appointmentId));
  if (appointmentIndex !== -1) {
    const updatedAppointment = req.body;
    appointments[appointmentIndex] = updatedAppointment;
    res.json(updatedAppointment);
  } else {
    res.status(404).json({
      message: "Appointment not found",
    });
  }
});

// create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

// create a new group
app.post("/groups", (req, res) => {
  const newGroup = req.body;
  newGroup.id = groups.length + 1;
  groups.push(newGroup);
  res.json(newGroup);
});

// start express app
app.listen(3001, () => {
  console.log("Server started on port " + { port });
});
