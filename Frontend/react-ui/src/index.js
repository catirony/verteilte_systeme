import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, SignupForm, LoginForm, EventForm, SettingsForm, CalendarView, GroupAdministration, GroupSettings } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/createNewEvent" element={<EventForm />} />
      <Route path="/" element={<CalendarView />} />
      <Route path="/settings" element={<SettingsForm />} />
      <Route path="/groupAdministration" element={<GroupAdministration />} />

      <Route path="/devGroupSettings" element={<GroupSettings />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
