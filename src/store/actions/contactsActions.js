import * as actionTypes from '../types/types';
import {apiBaseUrl} from './../helpers/common';
import {handleResponse} from './../helpers/userServices';
import toastr from "reactjs-toastr";


export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchContactsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        payload: data.data
    }
}
export function getContacts(id=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/get-contacts/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchContactsSuccess(data));
        });
    }
}

export const fetchGroupSuccess=(data)=>{
    return{
        type:actionTypes.FETCH_GROUP_SUCCESS,
        payload:data
    }
}

export function groupListing(){
    return dispatch=>{
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/group`,{
            method:'GET',
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return fetch(request).then(handleResponse).then(data=>{
            dispatch(fetchGroupSuccess(data.data));
        })
    }
}

export function newGroup(data){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/group`,{
            method:'POST',
            body:JSON.stringify({name:data}),
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`}),
        });
        return fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText, { displayDuration: 1500 });
                dispatch(groupListing());
            }else{
                toastr.error(data.ResponseText, { displayDuration: 1500 });
            }
        })
    }
}

export function deleteGroup(id){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/group/${id}`,{
            method:'DELETE',
            headers:new Headers({'Content-Type':'apllication/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return  fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText, { displayDuration: 1500 });
                dispatch(groupListing());
            }else{
                toastr.error(data.ResponseText, { displayDuration: 1500 });
            }
        })
    }
}

export function updateGroup(data){
    return dispatch=>{
        const {gid,groupName} = data;
        const request = new Request(`${apiBaseUrl}/adminPanel/group/${gid}`,{
            method:'PUT',
            body:JSON.stringify({name:groupName}),
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText,{displayDuration:1500});
                dispatch(groupListing());
            }else{
                toastr.error(data.ResponseText,{displayDuration:1500});
            }
        })
    }
}