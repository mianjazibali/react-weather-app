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
            let dayText = moment.unix(data.dt).format('dddd');
            let rain = data.rain ? data.rain['3h'] : '0'; 
            let snow = data.snow ? data.snow['3h'] : '0';
            return (
                <div className="col-md-3 ml-2" key={index}>
                    <Card
                        date={dateText}
                        day={dayText}
                        temp={parseInt(data.main.temp, 10)}
                        humidity={data.main.humidity}
                        weather={data.weather} // Array
                        cloudiness={data.clouds.all}
                        windSpeed={data.wind.speed}
                        rain={rain}
                        snow={snow}
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