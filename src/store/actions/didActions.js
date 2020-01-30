import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';
export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchdid = (data) => {
   
    return {
        type: actionTypes.FETCH_DID_SUCCESS,
        payload: data.data
    }
}
export function getDidCountries() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/did-country-list`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchdid(data))
        });
    }
}