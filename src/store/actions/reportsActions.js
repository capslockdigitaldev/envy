import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}
export const fetchReportSmsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_REPORT_SMS_SUCCESS,
        payload: data.data
    }
}
export const fetchReportCallSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_REPORT_CALL_SUCCESS,
        payload: data.data
    }
}
export function getSmsReports() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/get-sms`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchReportSmsSuccess(data))
        });
    }
}
export function getCallReports() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/get-call`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchReportCallSuccess(data))
        });
    }
}