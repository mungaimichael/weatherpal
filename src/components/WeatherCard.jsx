import { useContext } from "react"
import weatherContext from '../App'

const WeatherCard = () => {

    const data = useContext(weatherContext);
    return (
        <>
            <div className="wrapper" onClick={() => console.log(data)} >
                data
            </div>
        </>
    )
}

export default WeatherCard