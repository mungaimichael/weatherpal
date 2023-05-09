import WeatherCard from "./components/WeatherCard"
import styles from "./styles/globals.module.css"

function App() {
  return (
    <div className={styles.main_wrapper}>
      <WeatherCard />
    </div>
  )
}

export default App
