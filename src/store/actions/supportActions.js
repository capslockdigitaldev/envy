import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: data.items
    }
}


export function allSupport() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/list`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataSuccess(data))
        });
    }
}

export function completeSupport() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/listComplete`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataSuccess(data))
        });
    }
}

export function progressSupport() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/listProgress`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataSuccess(data))
        });
    }
}

export function newSupport() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/listNew`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchDataSuccess(data))
        });
    }
}
