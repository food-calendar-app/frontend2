import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import ShoppingLists from "./ShoppingLists";

export default function Sidebar() {
    return (
        <aside className = "border p-5 w-64">
            <CreateEventButton />
            <SmallCalendar  />
            <ShoppingLists />
            <Labels />
        </aside>
    );
}