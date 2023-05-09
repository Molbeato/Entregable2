import { kelvinToCelsius } from "./kelvinToCelsius"

const conversion= 9/5
const conversion2= 32

export const kelvinToFarenheit= (kelvin) =>{
    const celsius= kelvinToCelsius(kelvin);
    return celsius*conversion+conversion2;
}