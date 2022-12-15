import React from "react";
import noodles from "./images/4.png";
import fish from "./images/5.png"
import veggie from "./images/6.png"

export default function AboutUs() {
    const developer = [
        { name: 'Mavis Ye', role: 'Frontend Engineering', span_icon: 'perm_contact_calendar' },
        { name: 'Mahmoud Agag', role: 'Backend Engineering', span_icon: 'engineering' },
        { name: 'Siema Alam', role: 'Frontend Engineering', span_icon: 'self_improvement' },

    ]

    return (
        <div className="mx-8">
            <div className="h-80">
                <div className="grid grid-cols-3 gap-2">
                    <div><img src={noodles} alt="foodImage"></img></div>
                    <div><img src={fish} alt="foodImage"></img></div>
                    <div><img src={veggie} alt="foodImage"></img></div>
                </div>
            </div>
            <div className="mt-4">
                <div class="grid grid-flow-col gap-1">
                    <div class="col-span-2">
                        <h2 className="text-4xl font-semibold mt-24 drop-shadow-lg">
                            Our Story
                        </h2>
                        <p className="leading-loose text-xl mt-2 text-justify text-gray-600">
                            As college students, we understand that it can be difficult to plan out meals,<br></br> or find recipes that fit
                            specific needs. We wanted to create a space where <br></br>
                            people can plan, create, and find recipes. Users can add recipes to 
                            their <br></br> food calendar and create shopping lists to stay organized while planning<br></br>
                             out meals for the future. We <span className="text-green-800 font-bold">make meals easy.</span>
                        </p>
                    </div>
                    <div class="col-span-8 mt-8 drop-shadow-lg">
                        {developer.map((item) => (
                            <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 mb-2">
                                <div className="flex items-center gap-4">
                                    <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                                        <span className="material-icons-outlined text-black mx-2 mt-2">
                                            {item.span_icon}
                                        </span>
                                    </span>
                                    <div>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                        <p className="text-2xl font-medium text-gray-900">{item.name}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}