const apikey = "343c66302095d34cd530689894b2cfda";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").Style.display = "none";
}
else{
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzel.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").computedStyleMap.display = "block";
    document.querySelector(".error").style.display = "none";
}

    
}

searchBtn.addEventListener("click", ()=>{
    CheckWeather(searchBox.value);

})


