import Search from "../search/index"

import styles from '../WEATHER/Weather.module.css'

import { useState, useEffect } from 'react'

function Weather() {

    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)

    async function fetchWeatherData(param) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=773c8609d4736b1b00c6bc617421e306`)
            if(!response.ok) {
                throw new Error('Failed to fetch weather data')
            }
            const data = await response.json()
            setWeatherData(data)
            console.log(data, "data")

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchWeatherData('Kuala Lumpur')  // Default city when component mounts
    }, [])

    useEffect(()=>{
        console.log(weatherData)
    }, [weatherData])

    function handleSearch(){
        fetchWeatherData(search)   
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday : 'long',
            month : 'long',
            day : 'numeric', 
            year : 'numeric'
        })
    }

    // Calculate temperature in degrees Celsius
    const temperatureInCelsius = weatherData ? (weatherData.main.temp - 273.15).toFixed(2) : null;

    return(<>
    <Search 
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />

            {loading ? (
                <div>Loading...</div>
            ) : (

                <>
                    <div className={styles['city-name']}>
                        <h2>
                            {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                        </h2>
                    </div>
                    <div className={styles.date}>
                        <span>{getCurrentDate()}</span>
                    </div>

                    <br/>

                     {/* Display temperature in degrees Celsius */}
                     <div className={styles.temperature}>{temperatureInCelsius}°C</div>
                </>
            )} 

        </>
    
    )}

export default Weather