import React from "react";
import foodImage from "./images/loginfood.png";
import { Link } from 'react-router-dom';


export default function LogIn() {
    return (
        <div className="relative grid sm:grid-cols-2 sm:gap-2 sm:max-h-screen">
            <div className="flex justify-center h-min m-3 sm:h-full sm:w-full sm:max-h-screen sm:ml-24 sm:mt-16 sm:mr-2">
                <img src={foodImage} alt="foodImage" className="h-4/5 sm:ml-2 sm:mt-10 sm:mr-14"></img>
            </div>
            <div className="sm:mt-60 sm:mr-24 px-8 pb-8 max-h-screen">
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
                <p className="mt-8">Don't have an account? <Link to={'/sign-up'} className="text-red-600 hover:text-green-900 font-bold">Sign Up.</Link></p>
            </div>
        </div>
    );
}