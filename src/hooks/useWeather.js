import axios from "axios";
import { useState } from "react";

const useWeather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=150b32efaedb1500b12bde03abc588dd`
      );
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (event, query) => {
    event.preventDefault();
    fetchWeather(query);
  };

  return { data, error, loading, handleFormSubmit };
};

export default useWeather;
