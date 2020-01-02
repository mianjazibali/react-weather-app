import React from 'react';
import './Card.css';

let card = (props) => {
  let iconUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
  return (  
    <div className="container-fluid shadow bg-white pt-4 pr-5 pb-5 pl-5 mt-5">
      <div className="row date">
        {props.date}
      </div>
      <div className="row">
          <div className="col-md-6 p-0">
            <div>
              <img src={iconUrl} alt={props.weather[0].description} />
            </div>
          </div>
          <div className="col-md-6 my-auto">
            <div className="temp main float-left">
              {props.temp}
            </div>
            <div className="temp float-left">
              o
            </div>
            <div className="temp min float-right mr-5">
              Min: {props.temp_min} &nbsp;
            </div>
            <div className="temp max float-right mr-5">
              Max: {props.temp_max} &nbsp;
            </div>
          </div>
      </div> 
      <div className="row description">
        <div className="col-md-12">
          {props.weather[0].description}
        </div>
      </div>
      <br />
      <div className="row mb-2">
        <div className="col-md-6 p-0">
          <img src="clouds.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.cloudiness} %</span> 
        </div>
        <div className="col-md-6 p-0">
          <img src="humidity.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.humidity} %</span> 
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-0">
          <img src="windy.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.windSpeed} mt/s</span> 
        </div>
        <div className="col-md-6 p-0">
          <img src="rain.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.rain} mm</span> 
        </div>
      </div>
    </div>
  );
}

export default card;