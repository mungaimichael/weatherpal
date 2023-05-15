import { useState } from "react";
import "../../styles/main.css"


const index = () => {

    const [query, setQuery] = useState('');
    return (
        <>

            <div className="weather-card" >
                <form
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
                            }}

                        >
                            <img src="/media/search.png" alt="search icon" />
                        </a>

                    </div>
                </form>

                <div className="weather">
                    <img src="/media/5.png" alt="weather icon" />
                    <span id="temp" >
                        22C
                    </span>
                    <span>
                        Monday, May 8th
                    </span>
                    <span>
                        Mostly Cloudy
                    </span>
                    <span>
                        Limuru
                    </span>
                </div>
            </div>

        </>

    )
}

export default index