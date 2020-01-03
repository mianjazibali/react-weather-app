import React from 'react';
import './CityDetail.css';

let cityDetail = (props) => {
    let countryIconUrl = `https://www.countryflags.io/${props.country}/flat/24.png`
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-1">
                <img src={countryIconUrl} alt={props.country} className="mt-n1"></img>
                &nbsp;
                <span>{props.city}</span>
            </div>
            <div className="col-md-1">
                <img src="latitude.svg" alt="Humidity" className="icon mt-n1" />
                &nbsp;
                {props.lat}
            </div>
            <div className="col-md-1">
                <img src="longitude.svg" alt="Humidity" className="icon mt-n1" />
                &nbsp;
                {props.lon}
            </div>
            <div className="col-md-1">
                <img src="sunrise.svg" alt="Humidity" className="icon mt-n1" />
                &nbsp;
                {props.sunrise}
            </div>
            <div className="col-md-1">
                <img src="sunset.svg" alt="Humidity" className="icon mt-n1" />
                &nbsp;
                {props.sunset}
            </div>
        </div>
    );
}

export default cityDetail;