import covidActionTypes from "../action-types/covidActionTypes";

const timeseriesReducer = ( state = {}, {type, payload} ) => {
    switch (type) {
        case covidActionTypes.REGISTER_COVID_TS_DATA:
            state = payload;
            return state;
            break;
        default:
            return state;
    }
};

export default timeseriesReducer;