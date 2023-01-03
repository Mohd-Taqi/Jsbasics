import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";
let apikey = "d3091d08a6160152b327f3868e0ad011";

let city = readlineSync.question("Enter a city:");
function getWeatherData() {
    axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
          .then((res) => {
           
            let data=res.data;
            let currentTemp1= data.dt;

            let currentTemp = data.main.temp;
            //   console.log(data)
              
            console.log(UTC(currentTemp1))
            let zone=data.timezone;
            console.log(UTC(currentTemp1+zone))
            })
            .catch((err)=>console.error(err));
     } 
     function toCelcius(t){
        return t-273;
     }
     const toFarhenheit =(temp)=>{
        return temp * (9 / 5) + 32;
     };

     const UTC=(t)=>{
         return new Date(t*1000).toLocaleTimeString("en-us",{timeZone:"UTC"})
     }
    
     
getWeatherData();