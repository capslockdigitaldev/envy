import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}
export const fetchTeamSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_TEAM_SUCCESS,
        payload: data.data
    }
}
export const fetchallUsersTeamSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_USERS_TEAM_SUCCESS,
        payload: data.data
    }
}
export const fetchSingleTeamSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_SINGLE_TEAM_SUCCESS,
        payload: data.data
    }
}
export const fetchSingleTeam = (data) => {
   
    return {
        type: actionTypes.FETCH_SINGLE_TEAM,
        payload: data.data
    }
}
export function getAllTeams(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-teams/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchTeamSuccess(data))
        });
    }
}
export function getAllUsersTeams() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/all-teams`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchallUsersTeamSuccess(data))
        });
    }
}
export function getAllTeamUsers(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-team-users/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchSingleTeamSuccess(data))
        });
    }
}
export function getSingleTeam(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/user/get-single-team/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchSingleTeam(data))
        });
    }
}