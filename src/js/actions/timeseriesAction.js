import timeseriesActionTypes from '../action-types/timeseriesActionTypes';
import store from '../store';
import URLS from '../utils/url';

export const fetch_timeseries = () => {
    return {
        type: timeseriesActionTypes.FETCH_TIMESERIES
    };
};

export const receive_timeseries = timeseries => {
    return {
        type: timeseriesActionTypes.FETCHED_TIMESERIES,
        data: timeseries
    };
};

export const receive_error = () => {
    return {
        type: timeseriesActionTypes.RECEIVED_ERROR
    };
};

export const thunk_timeseries_action_creator = () => {
    store.dispatch(fetch_timeseries());
    return function ( dispatch, getState ) {
        return fetch (URLS.TIMESERIES)
            .then(data => data.json())
            .then(data => {
                dispatch(receive_timeseries(data));
            })
            .catch(err => dispatch(receive_error()));
    };
};

