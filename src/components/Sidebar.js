import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import ShoppingLists from "./ShoppingLists";
import CreateFavoritesButton from "./CreateFavoritesButton";

export default function Sidebar() {
    return (
        <aside className = "border p-5 w-64">
            <div className = "flex flex-row">
                <CreateEventButton />
                <CreateFavoritesButton />
            </div>
            <SmallCalendar  />
            <ShoppingLists />
            <Labels />
        </aside>
    );
}