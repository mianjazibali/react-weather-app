import React from 'react';
import EmptyCard from './emptyCard/EmptyCard';
import Card from './card/Card';
import moment from 'moment-timezone';
import _ from 'underscore';

let weatherCardsList = (props) => {
    let weatherCards;
    if(props.forecastList.length === 0) {
        weatherCards = (
            <div className="col-md-6">
                <EmptyCard isFetching={props.isFetching} msg={props.msg}/>
            </div>
        );
    }
    else {
        let startDate = moment.unix(props.forecastList[0].dt).startOf('day').unix();
        let distinctWeatherForecast = _.filter(props.forecastList, data => {
            let shouldAdd = false;
            if(moment.unix(data.dt).startOf('day').unix() === startDate) {
                startDate = moment.unix(startDate).add(1, 'days').unix();
                shouldAdd = true;
            }
            return shouldAdd;
        });
        let weather = _.map(distinctWeatherForecast, (data, index) => {
            let dateText = moment.unix(data.dt).format('Do MMMM');
            return (
                <div className="col-md-2" key={index}>
                    <Card
                        date={dateText}
                        temp={parseInt(data.main.temp, 10)}
                        temp_min={parseInt(data.main.temp_min, 10)}
                        temp_max={parseInt(data.main.temp_max, 10)}
                        humidity={data.main.humidity}
                        weather={data.weather} // Array
                        cloudiness={data.clouds.all}
                        windSpeed={data.wind.speed}
                        rain='12'
                    />
                </div>
            );
        });
        weatherCards = weather
    }
    return (
        <div className="row d-flex justify-content-center">
            {weatherCards}
        </div>
    );
} 

export default weatherCardsList;