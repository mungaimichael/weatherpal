import { useEffect } from 'react'
import useWeather from '../../hooks/useWeather'

const Index = () => {


    // get data returned from the useWeather hook 
    const { data } = useWeather();

    useEffect(() => {
        const getData = async () => {
            const weather = await data;
            console.log(weather)
        }

        getData()
    }, [data])


    return (
        <div className='week-forecast' >
            <div className="days-forecast">

            </div>

            <div className="days-forecast"></div>
            <div className="days-forecast"></div>
            <div className="days-forecast"></div>
            <div className="days-forecast"></div>
            <div className="days-forecast"></div>
        </div>
    )
}

export default Index