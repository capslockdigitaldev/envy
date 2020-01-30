import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: data.data
    }
}
export const fetchDataActiveMatchesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_ACTIVE_MATCHES_SUCCESS,
        payload: data.data
    }
}
export const fetchMatchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MATCH_SUCCESS,
        payload: data.data
    }
}
export const fetchMatchByIdSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MATCH_BY_ID_SUCCESS,
        payload: data.data
    }
}
export function allMatch() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-matches`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataSuccess(data))
        });
    }
}
export function allActiveMatch() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-active-matches`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataActiveMatchesSuccess(data))
        });
    }
}
export function getSpecificMatches(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-specific-matches/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchMatchSuccess(data))
        });
    }
}
export function getMatcheByid(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/matchbyid/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchMatchByIdSuccess(data))
        });
    }
}



