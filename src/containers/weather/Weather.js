import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './../../components/search';
import {changeLocation, searchForecast} from './../../action/weather';
import WeatherCards from './../../components/weatherCards';
import CityDetail from './../../components/cityDetail/CityDetail';
import cityTimezones from 'city-timezones';
import _ from 'underscore';
import moment from 'moment';

class Weather extends Component {
    render() {
        let forecast = this.props.forecast;
        let forecastList = [];
        let forecastCity = {};
        let coord = {};
        let sunset,sunrise;
        if(!_.isEmpty(forecast)) {
            forecastList = forecast.list;
            forecastCity = forecast.city;
            coord = forecastCity.coord;
            let [cityLookup] = cityTimezones.lookupViaCity(forecastCity.name);
            sunrise = moment.unix(forecastCity.sunrise).tz(cityLookup.timezone).format('h:mm:ss a');
            sunset = moment.unix(forecastCity.sunset).tz(cityLookup.timezone).format('h:mm:ss a');
        }
        return (
            <div>
                <br />
                <Search location={this.props.location} changeLocation={this.props.changeLocationHandler} searchHandler={this.props.searchForecastHandler} />
                <CityDetail city={forecastCity.name} lat={coord.lat} lon={coord.lon} sunrise={sunrise} sunset={sunset} country={forecastCity.country} />
                <WeatherCards isFetching={this.props.isFetching} forecastList={forecastList} msg={this.props.msg}/>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        location: state.location,
        isFetching: state.isFetching,
        forecast: state.forecast,
        msg: state.msg
    };
}

let mapDispatchToProps = dispatch => {
    return {
        changeLocationHandler: event => dispatch(changeLocation(event.target.value)),
        searchForecastHandler: () => dispatch(searchForecast())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);