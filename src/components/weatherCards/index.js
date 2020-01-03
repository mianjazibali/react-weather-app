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
            let startOfDay = moment.unix(data.dt).startOf('day').unix();
            let todayForecastArray = _.filter(props.forecastList, forecast => {
                return moment.unix(forecast.dt).startOf('day').unix() === startOfDay;
            });
            let min = todayForecastArray[0].main.temp_min;
            let max = todayForecastArray[0].main.temp_max;
            _.forEach(todayForecastArray, forecast => {
                if(forecast.main.temp_min < min) {
                    min = forecast.main.temp_min;
                }
                if(forecast.main.temp.max > max) {
                    max = forecast.main.temp.max;
                }
            });
            let dateText = moment.unix(data.dt).format('Do MMMM');
            let dayText = moment.unix(data.dt).format('dddd');
            return (
                <div className="col-md-3 ml-2" key={index}>
                    <Card
                        date={dateText}
                        day={dayText}
                        temp={parseInt(data.main.temp, 10)}
                        temp_min={parseInt(min, 10)}
                        temp_max={parseInt(max, 10)}
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