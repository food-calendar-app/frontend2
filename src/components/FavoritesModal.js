import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Select from "react-select";

const favorites = [
    { label: 'Mac and Cheese', value: 'mac and cheese' },
    { label: 'Penne Alla Vodka', value: 'penne alla vodka' },
    { label: 'Cereal', value: 'cereal' },
    { label: 'Oreo Cake', value: 'oreo cake' },
    { label: 'Mashed Potato', value: 'mashed potato' },
    { label: 'Ravioli', value: 'ravioli' },
    { label: 'Mac and Cheese1', value: 'mac and cheese1' },
    { label: 'Penne Alla Vodka1', value: 'penne alla vodka1' },
    { label: 'Cereal1', value: 'cereal1' },
    { label: 'Oreo Cake1', value: 'oreo cake1' },
    { label: 'Mashed Potato1', value: 'mashed potato1' },
    { label: 'Ravioli1', value: 'ravioli1' },
]

export default function FavoritesModal() {
    const { setShowFavoritesModal, daySelected, } = useContext(GlobalContext);

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            textAlign: 'left',
            backgroundColor: state.isSelected ? 'green' : '',
            '&:hover': {
                backgroundColor: '#e8f4ea',
                color: 'black',
            }
        }),
        control: (base, state) => ({
            ...base,
            border: state.isFocused ? 'green' : '',
        })
    };

    return (
        <div className = "h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <div className = "bg-white rounded-lg shadow-2xl w-1/4 flex flex-col">
                <header className = "bg-gray-100 rounded-t-lg px-4 py-2 flex justify-between items-center">
                    <span className = "material-icons-outlined text-gray-400 pt-1">
                        favorite
                    </span>
                    <span className = "text-left px-3 pt-1 font-bold text-gray-600">
                        Add From Your Favorites
                    </span>
                    <div>
                        <button onClick = {() => setShowFavoritesModal(false)}>
                            <span className = "material-icons-outlined text-gray-400 pt-2">
                                close
                            </span>
                        </button>
                    </div>
                </header>

                <div className = "p-3 pr-7 pt-4 mt-3">
                    <div className = "grid grid-cols-1/5 items-end gap-y-7">
                        <span className = "material-icons-outlined text-gray-400">
                            schedule
                        </span>
                        <p className = "text-left px-3">
                            { daySelected.format("ddd, MMMM DD") }
                        </p>
                        <span className = "material-icons-outlined text-gray-400 mb-2">
                            restaurant
                        </span>
                        <p className = "text-left1">
                            <Select options = { favorites } styles = {selectStyles} />
                        </p>
                    </div>
                </div>

                <footer className = "flex justify-end border-t p-3 mt-5">
                    <div className = "flex justify-end">
                        <button
                            type = "submit"
                            className = "bg-green-800 hover:bg-green-900 px-6 py-2 rounded text-white"
                        >
                            Save
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}