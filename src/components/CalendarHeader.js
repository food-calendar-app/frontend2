import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
        );
    }

    return (
        <header className = "px-4 py-2 flex justify-between border-t">
            <div className = "flex justify-start items-center">
                <button
                    onClick = {handleReset}
                    className = "border rounded py-2 px-4 mr-5"
                >
                    Today
                </button>
                <button onClick = {handlePrevMonth}>
                    <span className = "material-icons-outlined text-gray-600 mx-2 mt-2 cursor-pointer">
                        chevron_left
                    </span>
                </button>
                <button onClick = {handleNextMonth}>
                    <span className = "material-icons-outlined text-gray-600 mx-2 mt-2 cursor-pointer">
                        chevron_right
                    </span>
                </button>
                <h2 className = "ml-4 text-xl text-black-500 font-medium mt-1">
                    { dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
                </h2>
            </div>
        </header>
    );
}