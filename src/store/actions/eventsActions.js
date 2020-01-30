import { apiBaseUrl} from '../helpers/common';
import * as actionTypes from '../types/types';
import {handleResponse} from '../helpers/userServices';


export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_EVENTS_BEGIN
    }
}

export const fetcheventSuccess = (data) => {
    return {
        type: actionTypes.FETCH_EVENT_SUCCESS,
        payload: data.data
    }
}
export const fetchsingleeventSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SINGLE_EVENT_SUCCESS,
        payload: data.data
    }
}
export function getAllevents() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-events`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetcheventSuccess(data))
        });
    }
}
export function getSingleevents(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-single-event/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchsingleeventSuccess(data))
        });
    }
}
