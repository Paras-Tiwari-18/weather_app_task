const apikey="9d916bc49edf7f9af05d3231258ee060";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city)
{
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status==404)
    {
        alert("Enter Valid Input");
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="images/clouds.png";
        
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
}

}
   searchbtn.addEventListener("click",()=>{checkWeather(searchbox.value);})
