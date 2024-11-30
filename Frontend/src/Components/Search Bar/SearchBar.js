import './SearchBar.css';
import React, {useState} from "react";

export function SearchBar(){
    const [locations, setLocations] = useState(null);
    //handle data input 
    const handleInput = (value) => {
        //find locations using the input
        fetch(`/api?input=${value}`)
        .then((response) => {
            if(!response.ok) throw new Error ('Error fetching data');
            return response.json();
        })
        .then((response) => { //use the data //
            if(Object.values(response) !== 0){
                setLocations(Object.values(response));
            }
        })
        .catch((error) => {console.error(error.message);});
    };

    //when the search bar text value is changed
    const onInput = (value) => {
        if(value !== "" && value !== " "){
            handleInput(value);
        }
    }

    return(
        <div className="SearchBarDiv">
            <h1 className="Header">Search for weather details in your area!</h1>
            <p id="Header"></p>
            <input type="text" id="SearchBar" onInput= {() => onInput(document.getElementById("SearchBar").value)}></input> <br/>
            
            {locations && (
                <div>
                    {locations.map((locations, index) => (
                        <div>
                        <p>{locations.name + ", " + locations.state + ", " + locations.country}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}