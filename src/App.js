import {useState} from 'react'
import {getWeatherData, getForecaseData} from './api'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'

import './App.css'

const App = () => {
  const {weather, setWeather} = useState(null)
  const {forecast, setforecast} = useState([])
  const {error, setError} = useState(null)

  const handleSearch = async city => {
    try {
      const weatherData = await getWeatherData(city)
      const forecastData = await getForecaseData(city)
      setWeather(weatherData)
      setforecast(forecastData)
      setError(null)
    } catch (err) {
      setError('The city not found or API failure')
      setWeather(null)
      setforecast([])
    }
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
      <div className="forecast">
        {forecast.slice(0, 5).map(day => (
          <ForecastCard key={day.dt} data={day} />
        ))}
      </div>
    </div>
  )
}

export default App
