import React, { useState } from 'react';
import './index.css';


// const api = {
//     key: 'b7e7f4fd35d3db0c1f437221a1012824',
//     base: 'http://api.openweathermap.org/data/2.5/',

// }





function App() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const search = (evt) => {
        if(evt.key === "Enter") {
            // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            fetch(`https://goweather.herokuapp.com/weather/${city}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                // setCity('');
                console.log(result);
            });
        }
    }

   
    function getCurrentDate(separator=''){

        let myCurrentDate = new Date()
        let date = myCurrentDate.getDate();
        let month = myCurrentDate.getMonth() + 1;
        let year = myCurrentDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }




    return (
        <div className="app">
            <main>
                <div className="searchBox">
                    <input type="text" id="searchInput" placeholder="City Name..." 
                      onChange={e => setCity(e.target.value)} value={city} onKeyPress={search} />
                </div>
                {(typeof weather.temperature != "undefined") ? (
                <div>
                  <div className="location">
                    <h1>{city}</h1>
                  </div>
                  <div className="date">
                    {getCurrentDate(".") }
                  </div>
                  <div className="weather-box">
                      <ul>
                        {/* <li>{Math.round(weather.main.temp)}°C</li>
                        <li>{weather.weather[0].main}</li>
                        <li>{weather.wind.speed}km/h</li> */}
                        <li>{weather.temperature}</li>
                        <li>{weather.description}</li>
                        <li>{weather.wind}</li>
                      </ul>
                      
                  </div>
                </div>
                 ) : ('')} 
            </main>
        </div>
    )
}



export default App;
