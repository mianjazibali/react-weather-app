import actionType from './type';
import axios from 'axios';
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
    console.log('Here');
    return async (dispatch, getState) => {
        dispatch(startSearch());
        const { location } = getState();
        let {data: {id: forecastId}} = await axios.get(`${apiBaseUrl}/weather?q=${location}&APPID=${appId}`);
        let {data: forecasts} = await axios.get(`${apiBaseUrl}/forecast?id=${forecastId}&APPID=${appId}&units=metric`);
        console.log(forecasts);
        dispatch(updateForecast(forecasts));
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

export {
    changeLocation,
    searchForecast
}