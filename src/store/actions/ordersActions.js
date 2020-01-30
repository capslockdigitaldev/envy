import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchorderSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        payload: data.data
    }
}
export const fetchallusersorderSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_USERS_ORDER_SUCCESS,
        payload: data.data
    }
}

export function getorders(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/all-orders/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchorderSuccess(data));
        });
    }
}
export function getallusersorders() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-all-orders`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchallusersorderSuccess(data));
        });
    }
}
