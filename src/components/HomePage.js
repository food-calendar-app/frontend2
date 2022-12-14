import React from "react";
// import busyfood from "./images/busyfood.avif";
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <div className="relative px-6 lg:px-8">
                {/* <img src={busyfood} alt="foodImage" className="foodPic w-full"></img> */}
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div>
                            <h1 className="text-4xl font-bold sm:text-center sm:text-6xl drop-shadow-xl mt-10">
                                Meals Made Easy.</h1>
                            <p className="mt-6 px-3 text-lg leading-8 text-gray-600 sm:text-center">
                                Plan your next homemade breakfast, lunch, or dinner. With an integrated calendar and recipes, you no longer have to shuffle through shopping lists and recipe books.
                            </p>
                            <div className="mt-5 flex gap-x-4 sm:justify-center">

                                <Link to={'/sign-up'} className="px-8 inline-block rounded-lg bg-green-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-700 hover:bg-green-900 hover:ring-green-800 ">
                                    Start Planning &#8594;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    );
}