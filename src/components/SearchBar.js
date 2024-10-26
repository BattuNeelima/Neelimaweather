import {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [city, setCity] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (city) {
      onSearch(city)
      setCity('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={event => setCity(event.target.value)}
        placeholder="Enter City Name"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
