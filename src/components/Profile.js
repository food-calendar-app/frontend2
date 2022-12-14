import React from "react";


export default function Profile() {
    return (
        <div className="relative grid grid-rows-1 grid-flow-col gap-4 bg-white h-screen mx-8">
            <div className="rounded-md bg-slate-100	h-2/4 p-5 ml-4 mr-1 my-5 col-span-3 drop-shadow-lg border-t">
                <h2 className="text-2xl">Jane Doe</h2>
            </div>
            <div className="rounded-md bg-slate-100	h-2/4 p-5 mr-4 my-5 col-span-6 drop-shadow-lg border-t">
                <h2 className="text-2xl mb-3">Food Details</h2>
                <p className="text-lg">Calories:</p>
                <p className="text-lg">Proteins:</p>
                <p className="text-lg">Sodium:</p>
                <p className="text-lg">Potassium:</p>
                <p className="text-lg">Cholesterol:</p>
                <p className="text-lg">Fiber:</p>
                <p className="text-lg">Sugar:</p>
            </div>
        </div>
    );
}