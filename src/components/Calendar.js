import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";
import DailyList from "./DailyList";
import WeeklyList from "./WeeklyList";
import FavoritesModal from "./FavoritesModal";

export default function Calendar() {
    const [ currenMonth, setCurrentMonth ] = useState(getMonth());
    const { monthIndex, showEventModal, showDailyModal, showWeeklyModal, showFavoritesModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            {showDailyModal && <DailyList />}
            {showWeeklyModal && <WeeklyList />}
            {showFavoritesModal && <FavoritesModal />}

            <div className = "h-screen flex flex-col">
                <CalendarHeader />
                <div className = "flex flex-col flex-1 md:flex-row">
                    <Sidebar />
                    <Month month = {currenMonth} />
                </div>
            </div>
        </React.Fragment>
    );
}