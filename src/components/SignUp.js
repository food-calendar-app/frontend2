import React from "react";
import foodImage from "./images/signUpPic.jpg";
import { Link } from 'react-router-dom';


export default function SignUp() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div>
                <img src={foodImage} alt="foodImage" className="foodPic max-h-full object-contain"></img>
            </div>
            <div className="pt-56 px-8">
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
                                focus:border-blue-600 focus:outline-none" id="firstName"
                                placeholder="First name">
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
                                focus:border-blue-600 focus:outline-none" id="lastName"
                                placeholder="Last name">
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
                            focus:border-blue-600 focus:outline-none" id="emailAddress"
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
                            focus:border-blue-600 focus:outline-none" id="password"
                            placeholder="Password"></input>
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
                <p className="mt-8">Already have an account? <Link to={'/login'} className="text-green-700 hover:text-green-900 font-bold">Log in.</Link></p>
            </div>
        </div>
    );
}