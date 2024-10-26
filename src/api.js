import axios from 'axios'

const API_KEY = 'OpenWeatherMap'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const getWeatherData = async city => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  const response = await axios.get(url)
  return response.data
}

export const getForecaseData = async city => {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  const response = await axios.get(url)
  return response.data
}
