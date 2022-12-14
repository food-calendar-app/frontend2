import React from "react";
import foodImage from "./images/signUpPic.jpg";
import { Link } from 'react-router-dom';


export default function LogIn() {
    return (
        <div className="grid grid-cols-2 gap-2 overflow-hidden">
            <div>
                <img src={foodImage} alt="foodImage" className="foodPic max-h-full object-contain"></img>
            </div>
            <div className="pt-72 px-8">
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
                        bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg">
                        LOG IN</button>
                </form>
                <p className="mt-8">Don't have an account? <Link to={'/sign-up'} className="text-green-700 hover:text-green-900 font-bold">Sign Up.</Link></p>
            </div>
        </div>
    );
}