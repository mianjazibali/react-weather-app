import actionType from './type';

const changeLocation = value => {
    return {
        type: actionType.CHANGE_LOCATION,
        payload: {
            location: value
        }
    }
}

export {
    changeLocation
}