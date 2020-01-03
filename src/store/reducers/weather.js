import actionType from './../../action/type';

let initialState = {
    location: '',
    isFetching: false,
    forecast: {},
    msg: ''
}

let weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload.location
            };
        case actionType.START_SEARCH:
            return {
                ...state,
                forecast: {},
                isFetching: true
            };
        case actionType.UPDATE_FORECAST:
            return {
                ...state,
                forecast: action.payload.forecast,
                isFetching: false
            };
        case actionType.UPDATE_MSG:
            return {
                ...state,
                msg: action.payload.msg,
                forecast: {},
                isFetching: false
            }
        default:
            return state;
    }
}

export default weatherReducer;