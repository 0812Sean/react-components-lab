import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => (
  <div className="weather">
    <h2>{day}</h2>
    <img src={img} alt={imgAlt} />
    <p><span>conditions: </span>{conditions}</p>
    <p><span>time: </span>{time}</p>
  </div>
);

// Level up
// const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => (
//   <div className="weather">
//     <WeatherData day={day} conditions={conditions} time={time} />
//     <WeatherIcon img={img} imgAlt={imgAlt} />
//   </div>
// );
export default WeatherForecast;