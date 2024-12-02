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

    function convert(){
        if(document.getElementById("temp").innerHTML.includes("(F)")){
            let tempC = ((temp - 32) * (5/9));
            tempC = tempC.toFixed(2);
            let feelsLikeC = ((feelsLike - 32) * (5/9));
            feelsLikeC = feelsLikeC.toFixed(2);
            document.getElementById("temp").innerHTML = "temperature (C): " + tempC + "°";
            document.getElementById("feelsLike").innerHTML = "feels like (C): " + feelsLikeC + "°";
        }
        else{
            document.getElementById("temp").innerHTML = "temperature (F): " + temp + "°";
            document.getElementById("feelsLike").innerHTML = "feels like (F): " + feelsLike + "°";
        }
    }
    
    return(
        <div id="WeatherDetails">
            <h2>Weather Details for {name}:</h2>
            <p id="temp"> temperature (F): {temp}°</p>
            <p id="feelsLike">feels like (F): {feelsLike}°</p>
            <p>description: {desc}</p>
            <p>humidity: {humidity}</p>
             <p>wind speed: {windSpeed}</p>
            <p>sunrise: {sunrise}</p>
            <p>sunset: {sunset}</p> <br/>
            <input type="button" value="convert temperature unit" onClick={() => convert()}></input>
        </div>
    )
}