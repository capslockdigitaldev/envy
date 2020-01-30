import { apiBaseUrl, callHandleArray } from '../helpers/common';
import * as actionTypes from '../types/types';
import {handleResponse} from '../helpers/userServices';
import toastr from "reactjs-toastr";



export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchUserSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: data.data
    }
}
export const fetchUsersSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: data.data
    }
}
export const fetchAllUserSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_USER_SUCCESS,
        payload: data.data
    }
}
export function getUserdetails(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-user/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            data.data.cart = JSON.parse(data.data.cart);
            dispatch(fetchUserSuccess(data));
        });
    }
}
export function getallUserdetails(id=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-usersdata/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json'}),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchAllUserSuccess(data));
        });
    }
}
export function getUsersdetail() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/allusers`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchUsersSuccess(data));
        });
    }
}