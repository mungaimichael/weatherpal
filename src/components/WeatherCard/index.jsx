import { useState } from "react"
import styles from "../../styles/weatherCard.module.css"


const index = () => {
    const [query, setQuery] = useState(' ');
    
    return (
        <div className={styles.left_card}>
            <form
                className={styles.search_input}
                onSubmit={(e) => { e.preventDefault(); console.log(query) }}
            >
                <input
                    type="text"
                    name="query"
                    placeholder="where is your location?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <a type="submit" >
                    <img src="/media/search.png" alt="search icon" />
                </a>
            </form>
        </div>
    )
}

export default index