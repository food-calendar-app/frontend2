import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
    "indigo",
    "green",
    "blue",
    "red",
    "purple",
    "gray",
];

export default function EventModal() {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0]
    );
    const [favorite, setFavorite] = useState();
    
    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === '') {
            
        } else {
            const calendarEvent = {
                title,
                description,
                label: selectedLabel,
                day: daySelected.valueOf(),
                id: selectedEvent ? selectedEvent.id : Date.now(),
            };
            if (selectedEvent) {
                dispatchCalEvent({ type: "update", payload: calendarEvent });
            } else {
                dispatchCalEvent({ type: "push", payload: calendarEvent });
            }
    
            setShowEventModal(false);
        }
    }

    return (
        <div className = "h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className = "bg-white rounded-lg shadow-2xl w-1/4">
                <header className = "bg-gray-100 rounded-t-lg px-4 py-2 flex justify-between items-center">
                    <span className = {`material-icons-outlined pt-2 cursor-pointer ${favorite ? "text-green-600" : "text-gray-400"}`} onClick = {() => setFavorite(!favorite)}>
                        favorite
                    </span>
                    <div>
                        <button onClick = {() => setShowEventModal(false)}>
                            <span className = "material-icons-outlined text-gray-400 pt-2">
                                close
                            </span>
                        </button>
                    </div>
                </header>

                <div className = "p-3">
                    <div className = "grid grid-cols-1/5 items-end gap-y-7">
                        <div>
                            <span className = "material-icons-outlined text-gray-400">
                                restaurant
                            </span>
                        </div>
                        <input 
                            required
                            type = "text" 
                            name = "title" 
                            placeholder = "Add Meal Name"
                            value = {title}
                            className = "pt-5 pb-1 border-0 text-gray-600 text-xl font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-green-700"
                            onChange = {(e) => setTitle(e.target.value)}
                        />
                        <span className = "material-icons-outlined text-gray-400">
                            schedule
                        </span>
                        <p className = "text-left px-3">
                            { daySelected.format("dddd, MMMM DD") }
                        </p>
                        <span className = "material-icons-outlined text-gray-400">
                            description
                        </span>
                        <input 
                            required
                            type = "text" 
                            name = "description" 
                            placeholder = "Add Ingredients"
                            value = {description}
                            className = "pt-0 pb-1 border-0 text-gray-600 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-green-700"
                            onChange = {(e) => setDescription(e.target.value)}
                        />
                        <span className = "material-icons-outlined text-gray-400">
                            bookmark_border
                        </span>
                        <div className = "flex justify-evenly">
                            {labelsClasses.map((lblClass, i) => (
                                <span
                                    key = {i}
                                    onClick = {() => setSelectedLabel(lblClass)}
                                    className = {`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className = "material-icons-outlined text-white text-sm">
                                            check
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className = "flex justify-between border-t p-3 mt-5">
                    <div className = "flex justify-start">
                        {selectedEvent && (
                            <span
                                onClick = {() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className = "material-icons-outlined text-gray-400 cursor-pointer pt-2 px-1"
                            >
                                delete
                            </span>
                        )}
                    </div>
                    <div className = "flex justify-end">
                        <button
                            type = "submit"
                            onClick = {handleSubmit}
                            className = "bg-green-800 hover:bg-green-900 px-6 py-2 rounded text-white"
                        >
                            Save
                        </button>
                    </div>
                </footer>
            </form>
        </div>
    );
}