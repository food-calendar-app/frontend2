import React from "react";
import busyfood from "./images/busyfood.avif";


export default function HomePage() {
    return (
        <div className="relative">
            <img src={busyfood} alt="foodImage" className="foodPic w-full"></img>
            <h1 className="mme absolute text-5xl text-white left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl font-bold">
                Meals Made Easy.</h1>
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                        w-1/6 px-6
                        py-2.5
                        font-bold
                        text-base bg-green-800 hover:bg-green-900 text-white font-bold rounded absolute text-sm text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5 ">
                START PLANNING</button>
                
        </div>
    );
}