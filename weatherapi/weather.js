import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";
//URL

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let apikey = "d3091d08a6160152b327f3868e0ad011";

const getWeatherData = () => {
  console.clear();
  console.log(chalk.yellowBright("****************************************"));
  console.log(chalk.blue("\t\tWEATHER CLI"));
  console.log(chalk.yellowBright("****************************************"));
  let city = readlineSync.question("Enter the name of the city: ");
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
    .then((res) => {
      let data = res.data;
      console.log(data.name);        // here it refers to api main.name object
      console.log(data);
      console.log(city);

      let cel = toCelcius(data.main.temp);
      console.log(`Temperature in Celcius is ${cel.toFixed(2)} \u{00B0}C`);
      let far = toFarhenheit(cel);
      console.log(`Temperature in Farhenheit is ${far.toFixed(2)} \u{00B0}F`);
     
      let celmin = toCelcius(data.main.temp_min);
      let farmin = toFarhenheit(celmin);
      let celmax = toCelcius(data.main.temp_max);
      let farmax = toFarhenheit(celmax);
   
      console.log(`\nMinimum temperature in celcius: ${celmin.toFixed(2)} \u{00B0}C`);   // here we check for unicode given for subscript
      console.log(`Minimum temperature in farhenheit: ${farmin.toFixed(2)} \u{00B0}F`);
      console.log(`Maximum temperature in celcius: ${celmax.toFixed(2)}\u{00B0}C`);
      console.log(`Maximum temperature in farhenheit: ${farmax.toFixed(2)}\u{00B0}F`);

    

    })
    .catch((err) => {
    //   console.error(err.response);
    console.error(err.response.data.message);
    console.log("wrong")

    });
};



const toCelcius = (temp) => {
  return temp - 273;
};

const toFarhenheit = (temp) => {
  return temp * (9 / 5) + 32;
};
getWeatherData();


