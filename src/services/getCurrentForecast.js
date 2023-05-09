import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import { kelvinToFarenheit } from "../utils/kelvinToFarenheit";
import { getIconById } from "../utils/getIconsById";

export const getCurrentForecast= async (lat, lon) =>{
    try {
        const params = {lat: lat, lon: lon, appid: "926544411259e02fb46434b26a958fe2"}
        const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", 
        {params});
        const weatherInfo= {
            country: res.data.sys.country,
            city: res.data.name,
            weather: {
                main: res.data.weather[0].main,
                description: res.data.weather[0].description,
                icon: getIconById(res.data.weather[0].icon)
            },
            temperature: {
                kelvin: res.data.main.temp,
                celsius: parseFloat(kelvinToCelsius(res.data.main.temp)), 
                farenheit: parseFloat(kelvinToFarenheit(res.data.main.temp)),
            }
        }
        return weatherInfo
    } catch (error) {
        console.error(error);
    }
}