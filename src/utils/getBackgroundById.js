import backgroundClearSkyDay from "../backgrounds/clear_sky.jpeg";
import backgroundClearSkyNight from "../backgrounds/clear_sky.jpeg";
import backgroundFewCloudsDay from "../backgrounds/few_clouds.jpeg";
import backgroundFewCloudsNight from "../backgrounds/few_clouds.jpeg";
import backgroundScatteredClouds from "../backgrounds/scattered_clouds.jpeg";
import backgroundBrokenClouds from "../backgrounds/broken_clouds.jpeg";
import backgroundShowerRain from "../backgrounds/rain.jpeg";
import backgroundRainDay from "../backgrounds/shower_rain.jpeg";
import backgroundRainNight from "../backgrounds/shower_rain.jpeg";
import backgroundThunderstorm from "../backgrounds/thunderstorm.jpeg";
import backgroundSnow from "../backgrounds/snow.jpeg";
import backgroundMist from "../backgrounds/wind.jpeg";

export const getBackgroundById = (idBackground) => {
  switch (idBackground) {
    case "01d1":
      return backgroundClearSkyDay;
    case "01n1":
      return backgroundClearSkyNight;
    case "02d1":
      return backgroundFewCloudsDay;
    case "02n1":
      return backgroundFewCloudsNight;
    case "03d1":
    case "03n1":
      return backgroundScatteredClouds;
    case "04d1":
    case "04n1":
      return backgroundBrokenClouds;
    case "09d1":
    case "09n1":
      return backgroundShowerRain;
    case "10d1":
      return backgroundRainDay;
    case "10n1":
      return backgroundRainNight;
    case "11d1":
    case "11n1":
      return backgroundThunderstorm;
    case "13d1":
    case "13n1":
      return backgroundSnow;
    case "50d1":
    case "50n1":
      return backgroundMist;
  }
};