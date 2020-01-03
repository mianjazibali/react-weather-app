import actionType from './type';
import axios from 'axios';
import _ from 'lodash';
let apiBaseUrl = 'https://api.openweathermap.org/data/2.5';
let appId = 'eede28a7357ee76bf5313985f72dc138';

const changeLocation = value => {
    return {
        type: actionType.CHANGE_LOCATION,
        payload: {
            location: value
        }
    }
}

const startSearch = () => {
    return {
        type: actionType.START_SEARCH,
    }
}

const searchForecast = () => {
    return async (dispatch, getState) => {
        const {location, forecast} = getState();
        let capitalizeLocation = _.startCase(location);
        if(capitalizeLocation === '') {
            dispatch(updateMsg('Ops! Empty City Name'));
        } else if (forecast && forecast.city && capitalizeLocation === forecast.city.name ) {
            return {
                type: actionType.DO_NOTHING
            };
        } else {
            try{
                dispatch(startSearch());
                let {data: {id: forecastId}} = await axios.get(`${apiBaseUrl}/weather?q=${capitalizeLocation}&APPID=${appId}`);
                let {data: forecasts} = await axios.get(`${apiBaseUrl}/forecast?id=${forecastId}&APPID=${appId}&units=metric`);
                dispatch(updateForecast(forecasts));
            } catch(error) {
                dispatch(updateMsg('Ops! Invalid City Name'));
            }
        }
    };
}

const updateForecast = (forecast) => {
    return {
        type: actionType.UPDATE_FORECAST,
        payload: {
            forecast: forecast
        }
    }
}

const updateMsg = (msg) => {
    return {
        type: actionType.UPDATE_MSG,
        payload: {
            msg: msg
        }
    }
}

export {
    changeLocation,
    searchForecast,
    updateMsg
}