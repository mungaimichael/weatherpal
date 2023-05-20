import { useState } from "react";
import "../../styles/main.css"
import useWeather from "../../hooks/useWeather";

import CurrentLocationWeather from "../CurrentLocationWeather"


const index = () => {

    const { fetchWeather, data } = useWeather();

    const [query, setQuery] = useState('');
    return (
        <>

            <div className="weather-card" >
                <form onSubmit={e => e.preventDefault()}
                >
                    <div className="inputs">
                        <input
                            type="text"
                            name="query"
                            placeholder="where is your location?"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <a type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                fetchWeather(query);
                            }}

                        >
                            <img src="/media/search.png" alt="" />
                        </a>

                    </div>
                </form>
                <CurrentLocationWeather data={data} />
            </div>

        </>

    )
}

export default index