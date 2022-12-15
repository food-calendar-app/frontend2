import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import CalendarHeader from "./CalendarHeader";
import DailyList from "./DailyList";
import EventModal from "./EventModal";
import FavoritesModal from "./FavoritesModal";
import Sidebar from "./Sidebar";
import WeeklyList from "./WeeklyList";

export default function RecipeCollection() {
    const [ searchInput, setSearchInput ] = useState('');
    const [ buttonText, setButtonText ] = useState('Add to Calendar');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ instructions, setInstructions ] = useState('');
    const { showEventModal, showDailyModal, showWeeklyModal, showFavoritesModal } = useContext(GlobalContext);
    const { daySelected, dispatchCalEvent } = useContext(GlobalContext);

    const recipes = [
        { title: "blog 1", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the macaroni. Add the cheese." },
        { title: "blog 2", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 3", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the macaroni2. Add the cheese." },
        { title: "blog 4", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 5", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese. Cook the mac. Add the cheese. Cook the mac. Add the cheese. Cook the mac. Add the cheese." },
        { title: "blog 6", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 7", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 8", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 9", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese." },
        { title: "blog 10", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the cheese. Cook the mac. Add the cheese. Cook the mac. Add the cheese. Cook the mac. Add the cheese." },
        { title: "blog 11", servings: "1 servings", ingredients: "mac, cheese", instructions: "Cook the mac. Add the chicken." },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonText("Add To Calendar");
        }, 500);
        return () => clearTimeout(timer);
    }, [ buttonText ]);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    let dataSearch = recipes.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())
        )
    });

    function handleSubmit(e) {
        e.preventDefault();
        setButtonText("Added");
        
        const calendarEvent = {
            title,
            description,
            instructions,
            label: "indigo",
            day: daySelected.valueOf(),
            id: Date.now(),
        };
        dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            {showDailyModal && <DailyList />}
            {showWeeklyModal && <WeeklyList />}
            {showFavoritesModal && <FavoritesModal />}

            <div className = "h-screen flex flex-col">
                <CalendarHeader />
                <div className = "flex flex-1">
                    <Sidebar />
                    <div className = "flex flex-col">
                        <div className = "flex justify-center items-center">
                            <input 
                                type = "text"
                                placeholder = "Search Recipe..."
                                value = {searchInput}
                                onChange = {handleChange.bind(this)}
                                className = "w-1/2 mt-4 focus:ring-green-800 focus:border-green-800 focus:outline-none rounded-md"
                            />
                        </div>
                        <div className = "grid grid-cols-2 gap-10 p-6">
                            {dataSearch.map(recipe => 
                                <form 
                                    key = {recipe}
                                    onMouseOver = {() => {
                                        setTitle(recipe.title);
                                        setDescription(recipe.ingredients);
                                        setInstructions(recipe.instructions);
                                    }}
                                    className = "border rounded-lg bg-gray-100 p-4 group hover:bg-gray-200"
                                >
                                    <p className = "text-2xl my-3 pb-3 border border-t-0 border-x-0 border-b-2 border-green-800">{ recipe.title }</p>
                                    <div className = "grid grid-cols-3">
                                        <p className = "text-left font-bold">Serving Size:</p>
                                        <p className = "col-span-2">{ recipe.servings }</p>
                                        <p className = "text-left font-bold">Ingredients:</p>
                                        <p className = "col-span-2">{ recipe.ingredients }</p>
                                        <p className = "text-left font-bold">Instructions:</p>
                                        <p className = "col-span-2 text-left">{ recipe.instructions }</p>
                                    </div>
                                    <div className = "flex flex-col justify-center">
                                        <button
                                            type = "submit"
                                            onClick = {handleSubmit}
                                            className = "bg-green-800 hover:bg-green-900 px-6 py-2 mt-3 rounded text-white invisible group-hover:visible"
                                        >
                                            { buttonText }
                                        </button>
                                    </div>
                                </form>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}