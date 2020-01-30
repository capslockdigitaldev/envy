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
        type: actionTypes.FETCH_EXTENSION_SUCCESS,
        payload: data.data
    }
}
export const fetchExtensionNotInTeamSuccess = (data) =>{
    return {
        type: actionTypes.FETCH_EXTENSION_NOT_IN_TEAM_SUCCESS,
        payload: data.data
    }
}
export const fetchSearchSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_EXTENSION_SEARCH_SUCCESS,
        payload: data.data
    }
}
export function getExtensionsList(id=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/extension/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            if(id >0 ){
                dispatch(fetchSearchSuccess(data));
            }else{
                dispatch(fetchContactsSuccess(data));
            }
        });
    }
}
export function deleteExtension(id){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/extension/${id}`,{
            method:'DELETE',
            headers:new Headers({'Content-Type':'apllication/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return  fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText, { displayDuration: 1500 });
                dispatch(getExtensionsList());
            }else{
                toastr.error(data.ResponseText, { displayDuration: 1500 });
            }
        })
    }
}
export const fetchTeamSuccess=(data)=>{
    return{
        type:actionTypes.FETCH_TEAM_SUCCESS,
        payload:data
    }
}

export function teamListing(){
    return dispatch=>{
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/team`,{
            method:'GET',
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return fetch(request).then(handleResponse).then(data=>{
            dispatch(fetchTeamSuccess(data.data));
        })
    }
}

export function newTeam(data){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/team`,{
            method:'POST',
            body:JSON.stringify({name:data}),
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`}),
        });
        return fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText, { displayDuration: 1500 });
                dispatch(teamListing());
            }
        })
    }
}

export function deleteTeam(id){
    return dispatch=>{
        const request = new Request(`${apiBaseUrl}/adminPanel/team/${id}`,{
            method:'DELETE',
            headers:new Headers({'Content-Type':'apllication/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return  fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText, { displayDuration: 1500 });
                dispatch(teamListing());
            }else{
                toastr.error(data.ResponseText, { displayDuration: 1500 });
            }
        })
    }
}

export function updateTeam(data){
    return dispatch=>{
        const {depid,teamName} = data;
        const request = new Request(`${apiBaseUrl}/adminPanel/team/${depid}`,{
            method:'PUT',
            body:JSON.stringify({name:teamName}),
            headers:new Headers({'Content-Type':'application/json','X-Auth-Token':`${localStorage.getItem('token')}`})
        });

        return fetch(request).then(handleResponse).then(data=>{
            if(data.ResponseCode === "1"){
                toastr.success(data.ResponseText,{displayDuration:1500});
                dispatch(teamListing());
            }else{
                toastr.error(data.ResponseText,{displayDuration:1500});
            }
        })
    }
}

export function deleteExtensionFromTeam(id,depid) {
    return dispatch => {
        const request = new Request(`${apiBaseUrl}/adminPanel/remove-from-department/`, {
            method: 'POST',
            body: JSON.stringify({ "depid": depid, "id": id }),
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` })
        });

        return fetch(request)
            .then(res => res.json())
            .then(data => {
                if (data.ResponseCode === "1") {
                    dispatch(getExtensionsList(depid));
                    dispatch(teamListing());
                    toastr.success(data.ResponseText, { displayDuration: 1500 });
                } else {
                    toastr.error(data.ResponseText, { displayDuration: 1500 });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}
export function getExtensionsListNotInTeam(id , tab) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/adminPanel/get-extension-not-in-team/${id}/${tab}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });

        return fetch(request).then(handleResponse).then((data) => {
            
                dispatch(fetchExtensionNotInTeamSuccess(data));
            
        });
    }
}
