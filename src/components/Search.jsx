import { useEffect, useState } from "react";
import useWeather from "../hooks/useWeather"


const Search = () => {
    // state to handle user location input 
    const [location, setLocation] = useState(null);




    const handleUserInput = (e) => setLocation(e.target.value);


    const { data, loading, error, handleFormSubmit } = useWeather(location);


    loading ? (<h1>loading ...</h1>) : null
    error ? (<h1>{error}</h1>) : null


    return (

        <div>
            <div className="search-container">
                <form action="" onSubmit={(e) => handleFormSubmit(e, location)} >
                    <input
                        type="text"
                        name="city"
                        id=""
                        onChange={(e) => handleUserInput(e)}
                    />
                    <button type="submit">
                        <img src="/media/search.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search