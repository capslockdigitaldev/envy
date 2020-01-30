import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchDidSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_DID_SUCCESS,
        payload: data.data
    }
}


export function getDidNumbers() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/did-number`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDidSuccess(data))
        });
    }
}

export const fetchRulesSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_RULES_SUCCESS,
        payload: data.data
    }
}

export const fetchIvrSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_IVR_SUCCESS,
        payload: data.data
    }
}

export function rulesListing() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/show-rules`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchRulesSuccess(data))
        });
    }
}

export function ivrList() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/ivr-list`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchIvrSuccess(data))
        });
    }
}

export const fetchHourSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_HOURS_SUCCESS,
        payload: data.data
    }
}

export function businessHour() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/business-hours`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchHourSuccess(data))
        });
    }
}

