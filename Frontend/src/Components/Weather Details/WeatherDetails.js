export function WeatherDetails(){
    let name = sessionStorage.getItem("name");
    let temp = sessionStorage.getItem("temperature");
    let feelsLike = sessionStorage.getItem("feels-like");
    let desc = sessionStorage.getItem("desc");
    let humidity = sessionStorage.getItem("humidity");
    let windSpeed = sessionStorage.getItem("wind-speed");
    let sunrise = sessionStorage.getItem("sunrise");
    let sunset = sessionStorage.getItem("sunset");

    let sunriseDate = new Date(sunrise * 1000);
    sunrise = sunriseDate.getHours() + ":" + sunriseDate.getMinutes();
    if(sunriseDate.getHours() > 12){
        sunrise+= " PM";
    }
    else{
        sunrise+= " AM";
    }

    let sunsetDate = new Date(sunset * 1000);
    sunset = sunsetDate.getHours() + ":" + sunsetDate.getMinutes();
    if(sunsetDate.getHours() > 12){
        let hour = (sunsetDate.getHours())-12;
        sunset = hour + ":" + sunsetDate.getMinutes() + " PM";
    }
    else{
        sunset+= " PM";
    }
    
    return(
        <div id="WeatherDetails">
            <h2>Weather Details for {name}:</h2>
            <p>
                temperature (F): {temp}°<br/>
                feels like (F): {feelsLike}°<br/>
                description: {desc}<br/>
                humidity: {humidity}<br/>
                wind speed: {windSpeed}<br/>
                sunrise: {sunrise}<br/>
                sunset: {sunset}<br/>
            </p>
        </div>
    )
}