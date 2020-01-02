import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './../../components/search';
import {changeLocation} from './../../action/weather';
import WeatherCards from './../../components/weatherCards';
import _ from 'underscore';

class Weather extends Component {
    render() {
        let forecast = this.props.forecast;
        let forecastList = [];
        if(!_.isEmpty(forecast)) {
            forecastList = forecast.list;
        }
        let timeZoneKey;
        if(forecastList === []) {
            timeZoneKey = forecast.city.timeZone;
        };
        return (
            <div>
                <br /> <br />
                <Search location={this.props.location} changeLocation={this.props.changeLocationHandler} />
                <WeatherCards isFetching={this.props.isFetching} forecastList={forecastList} timeZoneKey={timeZoneKey} msg={this.props.msg}/>
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
        changeLocationHandler: event => dispatch(changeLocation(event.target.value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);