import React, { useState } from "react";

export default function RecipeCollection() {
    const [ searchInput, setSearchInput ] = useState('');

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

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    let dataSearch = recipes.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())
        )
    });

    return (
        <div className = "h-screen flex flex-col">
            <div className = "flex flex-col justify-center items-center">
                <input 
                    type = "text"
                    placeholder = "Search Recipe..."
                    value = {searchInput}
                    onChange = {handleChange.bind(this)}
                    className = "w-1/2 mt-4 focus:ring-green-800 focus:border-green-800 focus:outline-none rounded-md"
                />
            </div>
            <div className = "grid grid-cols-4 gap-10 p-6">
                {dataSearch.map(recipe => 
                    <div 
                        key = {recipe}
                        className = "border rounded-lg bg-gray-100 p-4"
                    >
                        <p className = "text-2xl my-3 pb-3 border border-t-0 border-x-0 border-b-2 border-green-900">{ recipe.title }</p>
                        <div className = "grid grid-cols-3">
                            <p className = "text-left font-bold">Serving Size:</p>
                            <p className = "col-span-2">{ recipe.servings }</p>
                            <p className = "text-left font-bold">Ingredients:</p>
                            <p className = "col-span-2">{ recipe.ingredients }</p>
                            <p className = "text-left font-bold">Instructions:</p>
                            <p className = "col-span-2 text-left">{ recipe.instructions }</p>
                        </div>
                    </div>    
                )}
            </div>
        </div>
    );
}