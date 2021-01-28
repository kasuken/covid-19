import covidActionTypes from "../action-types/covidActionTypes";

export const registerCovid19Data = covidData => {
    return {
        type: covidActionTypes.REGISTER_COVID_19_DATA,
        payload: covidData
    }
};

export const registerCovidTSData = covidTSData => {
    return {
        type: covidActionTypes.REGISTER_COVID_TS_DATA,
        payload: covidTSData
    }
};