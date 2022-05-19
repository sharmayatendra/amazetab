import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [location,setLocation] = useState({coordinates: {latitude: Number("") , longitude: Number("") }})
  console.log(location)
  const foundLocation = pos => {
     setLocation(prev => ({...prev, coordinates: {latitude: pos.coords.latitude , longitude: pos.coords.longitude}}))
  }
  
 useEffect(() => {
  window.navigator.geolocation.getCurrentPosition(foundLocation)
 },[])

  useEffect(() => {
  (async () => {
    const resp = await axios.get(
       `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.latitude}&lon=${location.coordinates.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`
     );
     console.log(resp);
     setWeather(resp.data)
 })()
  }, [location.coordinates.latitude,location.coordinates.longitude]);
  console.log(location);
  return (
    <>
      <h3 className="landing-page-heading subheading">{parseInt(weather?.main.temp - 273.15)}°C</h3>
      <h3 className="landing-page-heading subheading">{weather?.name}</h3>
    </>
  );
};

export { Weather };