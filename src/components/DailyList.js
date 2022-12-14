import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function DailyList() {
    const { setShowDailyModal } = useContext(GlobalContext);

    return (
        <div className = "h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <div className = "bg-white rounded-lg shadow-2xl w-1/4">
                <header className = "bg-gray-100 rounded-t-lg px-4 py-2 flex justify-between items-center">
                    <span className = "material-icons-outlined text-gray-400 pt-1">
                        shopping_cart
                    </span>
                    <span className = "text-left px-3 pt-1 font-bold text-gray-600">
                        Daily Shopping List
                    </span>
                    <div>
                        <button onClick = {() => setShowDailyModal(false)}>
                            <span className = "material-icons-outlined text-gray-400 pt-2">
                                close
                            </span>
                        </button>
                    </div>
                </header>
                <div className = "p-3 px-14 mb-3 max-h-96 overflow-y-auto overscroll-contain">
                    <label className = "items-center mt-3 block text-left">
                        <input type = "checkbox" className = "form-checkbox h-5 w-5 text-black-400 rounded focus:ring-0 cursor-pointer checked:bg-green-800 checked:hover:bg-green-800 checked:focus:bg-green-800"/>
                        <span className = "ml-2 text-gray-700 capitalize">Carrot</span>
                    </label>
                    <label className = "items-center mt-3 block text-left">
                        <input type = "checkbox" className = "form-checkbox h-5 w-5 text-black-400 rounded focus:ring-0 cursor-pointer checked:bg-green-800 checked:hover:bg-green-800 checked:focus:bg-green-800"/>
                        <span className = "ml-2 text-gray-700 capitalize">Carrot</span>
                    </label>
                </div>
            </div>
        </div>
    );
}