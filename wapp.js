//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
//ef1e029f387fda101133d2e0ca236652

const weatherapi ={
    key:"ef1e029f387fda101133d2e0ca236652",
    baseURL:"https://api.openweathermap.org/data/2.5/weather"
}
//event listener function on keypress
const searchib=document.getElementById('ib');
searchib.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
    console.log(searchib.value);
    getweatherReport(searchib.value);
    document.querySelector('.weather-details').style.display="block";
    }
});
// get weather report
function getweatherReport(city)    
{
    fetch(`${weatherapi.baseURL}?q=${city}&appid=${weatherapi.key}&units=metric`)
    .then(weather =>
        {
            return weather.json();
        }).then(displayweatherReport);
    }
    //display weather report
    function displayweatherReport(weather)
    {
        console.log(weather);
        let city=document.getElementById('city');
        city.innerText=`${weather.name},${weather.sys.country}`;
        
        let tempr=document.getElementById('temp');
        tempr.innerHTML=`${Math.round (weather.main.temp)}&deg;C`;

        let minmaxtemp=document.getElementById('minmax');
        minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

       let weatherlike=document.getElementById('weather');
       weatherlike.innerText=`${weather.weather[0].main}`;

       let date=document.getElementById('date');
       let latestdate=new Date();
       date.innerText=dateManage(latestdate);

       if(weatherlike.textContent == 'Clear')
       {
           document.body.style.backgroundImage="url(images/clearsky.jfif)";
       }else if(weatherlike.textContent == 'Clouds')
       {
           document.body.style.backgroundImage="url(images/cloudy.png)";
       } else if (weatherlike.textContent == 'Rain')
       {
           document.body.style.backgroundImage="url(images/rainy.jfif)";
       } else if (weatherlike.textContent == 'Snow')
       {
           document.body.style.backgroundImage="url(images/snowy.jpg)";
       }else if (weatherlike.textContent == 'ThunderStorm')
       {
           document.body.style.backgroundImage="url(images/thunderstorm.jpg)";
       } else if (weatherlike.textContent == 'Haze')
       {
           document.body.style.backgroundImage="url(images/cloudy.png)";
       }
       else if (weatherlike.textContent == 'Smoke')
       {
           document.body.style.backgroundImage="url(images/smoke.jpg)";
       }

    }
    // latest date
    function dateManage(ld)
    {
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months=["January","February","March","April","May","June","July","August","September","October","November","Deccember"];
        let year=ld.getFullYear();
        let month=months[ld.getMonth()];
        let date=ld.getDate();
        let day=days[ld.getDay()];
        return `${date} ${month} (${day}), ${year}`;
    }