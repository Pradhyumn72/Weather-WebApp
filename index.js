const apiKey="01bad43a0a156c10272c1739d3f61ebb";
const apiURl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const seachbox=document.querySelector(".sinp")
const searchbtn=document.querySelector(".sinbtn")
const weathericon=document.querySelector(".weather-icon")
let error=document.querySelector(".errsearch")
async function checkweather(city){
    const response = await fetch(apiURl+ city +`&appid=${apiKey}`); 
    if(response.status==404){
        document.querySelector(".errsearch").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    
    else{
        var data= await response.json();
    
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+`˚c`
        document.querySelector(".humidity").innerHTML=data.main.humidity +`%`
        document.querySelector(".wind").innerHTML=data.wind.speed +`km/h`;
    
       
    
       if (data.weather[0].main == "Clouds"){
            weathericon.src="cloudy.svg"
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.svg"
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.svg"
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.svg"
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="mist.svg"
        }
        document.querySelector(".weather").style.display ="block"
        document.querySelector(".errsearch").style.display="none"
    }
   
}
searchbtn.addEventListener("click",()=>{
    checkweather(seachbox.value);
}) 