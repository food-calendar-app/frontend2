import React from "react";
// import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./components/Profile";


function Navigation(props) {
  return (
    <div className="container p-4 text-white max-w-full	bg-gradient-to-r from-green-900 to-green-700 drop-shadow-md">
      <ul class="flex">
      <li class="mr-6">
          <NavLink to="/">
            Food Calendar App
          </NavLink>
        </li>
        <li class="mr-6 hover:text-slate-400">
          <NavLink to="/calendar">
            Calendar
          </NavLink>
        </li>
        <li class="mr-6 hover:text-slate-400">
          <NavLink to="/sign-up">
            Sign Up
          </NavLink>
        </li>
        <li class="mr-6 hover:text-slate-400">
          <NavLink to="/login">
            Log in
          </NavLink>
        </li>
        <li class="mr-6 hover:text-slate-400">
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    // <div className="App">

    //   <HomePage />
    //   <SignUp />
    //   <LogIn />
    //   <Calendar />

    // </div>
  );
}

export default App;