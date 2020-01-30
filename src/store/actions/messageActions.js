import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';
import toastr from "reactjs-toastr";

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const sendmessagesuccess = (data) => {
   
    return {
        type: actionTypes.SEND_MESSAGE_SUCCESS,
        payload: data.data
    }
}
export function sendMessage(number,message) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/send/${number}/${message}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(sendmessagesuccess(data))
            console.log(data);
            if(data.ResponseCode === '1'){
                toastr.success("Invitation Sent Succesfully.", {displayDuration: 1500});
            }else{
                toastr.error("Something Went Wrong.", {displayDuration: 1500});
            }
        });
    }
}