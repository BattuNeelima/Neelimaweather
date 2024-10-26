const ForecastCard = ({data}) => {
  const date = new Date(data.dt * 1000).toLocaleDateString()
  return (
    <div className="forecast-card">
      <h1>{date}</h1>
      <p>High: {date.main.temp_max}C</p>
      <p>Low: {date.main.temp_min}C</p>
      <p>Condition: {data.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </div>
  )
}

export default ForecastCard
