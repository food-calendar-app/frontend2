import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./components/Profile";
import RecipeCollection from "./components/RecipeCollection";
import AboutUs from "./components/AboutUs";

const navigation = [
  { name: 'Calendar', href: '/calendar' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'About Us', href: '/aboutus' },
]

function Navigation(props) {
  const [ menuHidden, setMenuHidden ] = useState(true);
  const [ menuDisplay, setMenuDisplay ] = useState('hidden sm:hidden');

  function handleMenu() {
    setMenuHidden(!menuHidden);
    if (menuHidden === true) {
      setMenuDisplay('hidden sm:hidden');
    } else {
      setMenuDisplay('block w-full sm:hidden');
    }
  }

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
    <div className="px-6 pt-5 pb-2 lg:px-8">
      <div>
        <nav className="bg-transparent flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1 align-top group" aria-label="Global">
            <NavLink to="/">
              <span className = "material-icons-outlined text-gray-900 group-hover:text-green-900 mx-2">
                fastfood
              </span>
            </NavLink>
            <NavLink to="/" className="align-top font-bold text-gray-900 group-hover:text-green-900">
              Mealsy
            </NavLink>
          </div>
          <div className="hidden sm:flex lg:min-w-0 flex-1 justify-center items-center sm:gap-x-4 md:gap-x-8 lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden sm:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <NavLink to="/profile" className="inline-block rounded-lg px-8 ml-2 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-green-800/10 hover:ring-green-900/20 hover:bg-green-800 hover:text-slate-100"
            >
              Profile
            </NavLink>
            <NavLink to="/login" className="inline-block rounded-lg px-3 ml-2 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-green-800/10 hover:ring-green-900/20 hover:bg-green-800 hover:text-slate-100">
              Log In
            </NavLink>
          </div>
          <div 
            className = "block sm:hidden cursor-pointer p-3"
            onClick = {handleMenu}
          >
            <span className = "material-icons-outlined text-gray-900 hover:text-green-900">
              menu
            </span>
          </div>
        </nav>
        <div className = { menuDisplay }>
          <ul className = "flex flex-col justify-center items-center w-full">
            {navigation.map((item) => (
              <a key = {item.name} href = {item.href} className = "w-full py-2 text-center font-semibold text-gray-900 hover:bg-green-900 hover:text-white">
                {item.name}
              </a>
            ))}
            <NavLink to = "/profile" className = "w-full py-2 text-center font-semibold text-gray-900 hover:bg-green-900 hover:text-white">
              Profile
            </NavLink>
            <NavLink to = "/login" className = "w-full py-2 text-center font-semibold text-gray-900 hover:bg-green-900 hover:text-white">
              Log In
            </NavLink>
          </ul>
        </div>
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
            <Route path="/aboutus" element={<AboutUs />} />
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