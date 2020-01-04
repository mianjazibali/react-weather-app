import React from 'react';
import './CityDetail.css';

let cityDetail = (props) => {
    let countryIconUrl = `https://www.countryflags.io/${props.country}/flat/24.png`
    return (
        <div className="row justify-content-center mt-5 mb-5">
            <div className="col-md-2">
                <div className="row  mb-1">
                    <div className="col-5">
                        <img src={countryIconUrl} alt={props.country} className="icon mt-n1"></img>
                    </div>
                    <div className="col-7">
                        <span className="text">{props.city}</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row  mb-1">
                    <div className="col-5">
                        <img src="latitude.svg" alt="Humidity" className="icon mt-n1" />
                    </div>
                    <div className="col-7">
                        <span>{props.lat}</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row mb-1">
                    <div className="col-5">
                        <img src="longitude.svg" alt="Humidity" className="icon mt-n1" />
                    </div>
                    <div className="col-7">
                        <span>{props.lon}</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row  mb-1">
                    <div className="col-5">
                        <img src="sunrise.svg" alt="Humidity" className="icon mt-n1" />
                    </div>
                    <div className="col-7">
                        <span>{props.sunrise}</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row">
                    <div className="col-5">
                        <img src="sunset.svg" alt="Humidity" className="icon mt-n1" />
                    </div>
                    <div className="col-7">
                        <span>{props.sunset}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cityDetail;