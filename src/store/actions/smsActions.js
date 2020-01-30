import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}
export const fetchContactSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_CONTACT_SUCCESS,
        payload: data.data
    }
}
export const fetchMessageSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_MESSAGE_SUCCESS,
        payload: data.data
    }
}

export function getContactNumbers(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/contact-list/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchContactSuccess(data))
        });
    }
}
export function getMessages(did_number,rec_number=0) {
    
    return dispatch => {
        const request = new Request(`${apiBaseUrl}/adminPanel/get-chat`, {
            method: 'POST',
            body: JSON.stringify({ "did_number": did_number, "rec_number_sms": rec_number }),
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` })
        });
        return fetch(request).then(handleResponse).then(data=>{
                dispatch(fetchMessageSuccess(data));

            
        })
    }
}
export function deleteMessage(id,did,rec){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/delete-msg/${id}`,{
            method:'DELETE',
            headers:new Headers({'Content-Type':'apllication/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return  fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                dispatch(getMessages(did,rec));
            }
        })
    }
}


