import axios from 'axios';
import chalk from 'chalk';
import dotenv from 'dotenv'

dotenv.config();

const API_KEY = process.env.API_KEY;

export async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      }
    );

    const data = response.data;

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    console.log(chalk.blue.bold(`\nWeather in ${city}:`));
    console.log(chalk.yellow(`Temperature: ${temperature}°C`));
    console.log(chalk.green(`Condition: ${description}`));
    console.log(chalk.magenta(`Humidity: ${humidity}%\n`));

  } catch (error) {
    console.log(chalk.red("Error fetching weather data."));
    if (error.response) {
      console.log(chalk.red(error.response.data.message));
    } else {
      console.log(chalk.red(error.message));
    }
  }
}