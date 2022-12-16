import React from "react";
import foodImage from "./images/signupfood.png";
import { Link } from 'react-router-dom';


export default function SignUp() {
    return (
        <div className="grid grid-cols-2 gap-2 max-h-screen">
            <div className="ml-24 mt-16 mr-2">
            <img src={foodImage} alt="foodImage" className="h-4/5 ml-2 mt-10"></img>
            </div>
            <div className="pt-52 px-8">
                <p className="text-4xl font-normal text-left mb-4">Join Us</p>
                <form className="w-full max-w-full">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="form-group mb-6">
                            <input type="text" className="form-control
                                block
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
                                focus:border-green-700 focus:outline-none" id="firstName"
                                placeholder="First name" required>
                            </input>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control
                                block
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
                                focus:border-green-700 focus:outline-none" id="lastName"
                                placeholder="Last name" required>
                            </input>
                        </div>
                    </div>

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
                            focus:border-green-700 focus:outline-none" id="emailAddress"
                            placeholder="Email address" required>
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
                            focus:border-green-700 focus:outline-none" id="password"
                            placeholder="Password" required></input>
                    </div>
                    <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        font-bold
                        text-base
                        bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg">
                        SIGN UP</button>

                </form>
                <p className="mt-8">Already have an account? <Link to={'/login'} className="text-red-600 hover:text-green-900 font-bold">Log in.</Link></p>
            </div>
        </div>
    );
}