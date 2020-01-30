import { apiBaseUrl, callHandleArray } from './../helpers/common';
import * as actionTypes from '../types/types';
import {handleResponse} from './../helpers/userServices';



export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchAccessSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ACCESS_SUCCESS,
        payload: data.data
    }
}
export function getAccessTypes() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/access-types`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchAccessSuccess(data));
        });
    }
}