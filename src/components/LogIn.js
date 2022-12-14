import React from "react";
import foodImage from "./images/loginfood.png";
import { Link } from 'react-router-dom';


export default function LogIn() {
    return (
        <div className="relative grid grid-cols-2 gap-2 max-h-screen">
            <div className="ml-24 mt-16 mr-2">
                <img src={foodImage} alt="foodImage" className="h-4/5 ml-2 mt-10"></img>
            </div>
            <div className="mt-60 px-8 max-h-screen">
                <p className="text-4xl font-normal text-left mb-4">Welcome Back</p>
                <form className="w-full max-w-full">
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded-lg
                            m-0
                            focus:ring-green-700
                            focus:border-green-700 focus:outline-none" id="emailAddress2"
                            placeholder="Email address">
                        </input></div>
                    <div className="form-group mb-6">
                        <input type="password" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded-lg
                            m-0
                            focus:ring-green-700
                            focus:border-green-700 focus:outline-none" id="password2"
                            placeholder="Password"></input>
                    </div>
                    <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        font-bold
                        text-base
                        bg-green-800 hover:bg-green-900 text-white font-bold rounded-lg">
                        LOG IN</button>
                </form>
                <p className="mt-8">Don't have an account? <Link to={'/sign-up'} className="text-green-700 hover:text-green-900 font-bold">Sign Up.</Link></p>
            </div>
        </div>
    );
}