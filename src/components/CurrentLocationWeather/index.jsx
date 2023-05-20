import { useEffect, useState } from "react";

const Index = ({ data }) => {
  const [weatherData, setWeatherData] = useState(null);



  useEffect(() => {
    async function getData() {
      const locationDetails = {
        location: data.name,
        icon: data.weather[0].icon,
        country: data.sys.country,
        weather: data.weather[0].main
      }

      setWeatherData(locationDetails);
    }

    getData();
  }, [data]);

  return (
    <>
      <div className="weather">

        <img src={`/media/${weatherData && weatherData.icon}.png`} alt="weather icon" />
        <h1>

        </h1>
        <h1>
          {
            weatherData && weatherData.icon
          }
        </h1>
        <h1 onClick={() => console.log(weatherData, '===>', data)} >
          {
            weatherData && weatherData.location
          }
        </h1>
      </div>
    </>
  );
};

export default Index;
