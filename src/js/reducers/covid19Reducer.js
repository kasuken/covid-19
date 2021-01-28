import covidActionTypes from "../action-types/covidActionTypes";

const covid19Reducer = ( state = {}, {type, payload} ) => {
    switch (type) {
        case covidActionTypes.REGISTER_COVID_19_DATA:
            state = payload;
            return state;
            break;
        default:
            return state;
            break;
    }
};

export default covid19Reducer;