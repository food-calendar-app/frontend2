import React from "react";
// import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./components/Profile";
import RecipeCollection from "./components/RecipeCollection";

const navigation = [
  { name: 'Calendar', href: '/calendar' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'About Us', href: '/aboutus' },
]

function Navigation(props) {
  return (
    // <div className="container p-4 text-white max-w-full	bg-gradient-to-r from-green-900 to-green-700 drop-shadow-md">
    //   <ul class="flex">
    //   <li class="mr-6">
    //       <NavLink to="/">
    //         Food Calendar App
    //       </NavLink>
    //     </li>
    //     <li class="mr-6 hover:text-slate-400">
    //       <NavLink to="/calendar">
    //         Calendar
    //       </NavLink>
    //     </li>
    //     <li class="mr-6 hover:text-slate-400">
    //       <NavLink to="/sign-up">
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li class="mr-6 hover:text-slate-400">
    //       <NavLink to="/login">
    //         Log in
    //       </NavLink>
    //     </li>
    //     <li class="mr-6 hover:text-slate-400">
    //       <NavLink to="/profile">
    //         Profile
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
    <div className="px-6 pt-6 lg:px-8">
      <div>
        {/* the logo */}
        <nav className="bg-transparent flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <NavLink to="/" className="-m-1.5 p-1.5">
              Food Calendar App
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <NavLink to="/profile" className="inline-block rounded-lg px-8 ml-2 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-green-800/10 hover:ring-green-900/20 hover:bg-green-800 hover:text-slate-100"
            >
              Profile
            </NavLink>
            <NavLink to="/login" className="inline-block rounded-lg px-3 ml-2 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-green-800/10 hover:ring-green-900/20 hover:bg-green-800 hover:text-slate-100">
              Log in
            </NavLink>
          </div>
        </nav>
      </div>
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
            <Route path="/recipes" element={<RecipeCollection />} />
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