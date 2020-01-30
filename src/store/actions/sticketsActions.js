import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';
import toastr from "reactjs-toastr";


export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchSticketsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_STICKETS_SUCCESS,
        payload: data.data
    }
}
export const fetchSingleSticketSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_SINGLE_STICKET_SUCCESS,
        payload: data.data
    }
}
export const fetchAllUsersSticketsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_USERS_STICKETS_SUCCESS,
        payload: data.data
    }
}
export function getSupportTickets(id=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-users-stickets/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchSticketsSuccess(data));
        });
    }
}
export function getSingleSupportTicket(id=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-single-ticket/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        
        return fetch(request).then(handleResponse).then((data) => {
            // console.warn("%c SUPPORT TICKET","color:red; font-size:50px",);
            data.data.messages = JSON.parse(data.data.messages);
            dispatch(fetchSingleSticketSuccess(data));
        });
    }
}
export function getAllUsersSupportTickets() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-stickets`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchAllUsersSticketsSuccess(data));
        });
    }
}