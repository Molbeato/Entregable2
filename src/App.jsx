import { useEffect } from 'react'
import './App.css'
import { getCoordinates } from './services/getCoordinates'
import { getCurrentForecast } from './services/getCurrentForecast'
import { useState } from 'react'

function App() {
const [weather, setWeather] = useState(null);
const [isCelsius, setIsCelsius] = useState(true)
useEffect(() => {
  const loadWeather= async  ()  =>{
    const coordinates= await getCoordinates();
    if (coordinates){
    const weatherData= await getCurrentForecast(
      coordinates.latitude, 
      coordinates.longitude)
    setWeather(weatherData);
    }
  }
  loadWeather();
}, [])

  return (
  <>
    {weather ? (
      <>
      <p className='tittle'>Weather App</p>
      <div className='weather_container'>
          <div className='city_container'>
            <h1>{weather.city}, {weather.country}</h1>
          </div>
        <article className='info_container'>
          <div>
            <img className='image' src={weather.weather.icon} alt={weather.weather.description} />
         </div>
            <p>{weather.weather.main.toUpperCase()} | {weather.weather.description}</p>
            <p>
          {isCelsius
          ? weather.temperature.celsius.toFixed(2)
          : weather.temperature.farenheit.toFixed(2)}{" "}
          °{isCelsius ? "C" : "F"}
            </p>
        </article>
        <button className='weather_button' onClick={()=> setIsCelsius(!isCelsius)}>
        Change to °{isCelsius ? "F" : "C"}</button>
      </div>
      </>
    ) : (
      <p>Loading weather ...</p>
    )}
    </>
  )
}

export default App
