import WeatherData from './WeatherData'
import WeatherIcon from './WeatherIcon'
import './WeatherForecast.css'

const WeatherForcast = ({ forecast }) => {
    return (
        <div className='weather'>
            <WeatherData
                day={forecast.day}
                conditions={forecast.conditions}
                time={forecast.time}
            />
            <WeatherIcon
                img={forecast.img}
                alt={forecast.imgAlt}
            />
        </div>
    );
};

export default WeatherForcast;