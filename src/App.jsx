import WeatherCard from "./components/WeatherCard"
import WeekForecast from "./components/WeekForecast"


function App() {
  return (
    <div className="container" >

      <div className="main-wrapper">
        <WeatherCard />
        <WeekForecast />
      </div>
    </div>
  )
}

export default App
