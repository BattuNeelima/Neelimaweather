const WeatherCard = ({data}) => (
  <div className="weather-card">
    <h2>{data.name}</h2>
    <p>Temperature: {data.main.temp}C</p>
    <p>Humidity: {data.main.humidity}%</p>
    <p>Wind speed: {data.wind.speed} m/s</p>
    <p>Condition: {data.weather[0].description}</p>
    <img
      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
      alt={data.weather[0].description}
    />
  </div>
)
export default WeatherCard
