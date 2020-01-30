import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';
export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchtransactions = (data) => {
   
    return {
        type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
        payload: data.data
    }
}
export const fetchalltransactions = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_TRANSACTIONS_SUCCESS,
        payload: data.data
    }
}
export function getAllTransacs(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/all-transactions/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchtransactions(data))
        });
    }
}
export function getAllUsersTransacs() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/all-users-transactions`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchalltransactions(data))
        });
    }
}