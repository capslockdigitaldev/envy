import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';
import toastr from "reactjs-toastr";

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}

export const fetchTournamentsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
        payload: data.data
    }
}
export const fetchfilterTournamentsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_FILTER_TOURNAMENTS_SUCCESS,
        payload: data.data
    }
}
export const fetchAllTournamentsMatches = (data) => {
   
    return {
        type: actionTypes.FETCH_ALL_TOURNAMENTS_MATCHES,
        payload: data.matchdata,
        payloadd :data.tourdata
    }
}
export const fetchsingleTournamentSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_SINGLE_TOURNAMENT_SUCCESS,
        payload: data.data,
    }
}

export function getTournaments() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-tournaments`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetch(request).then(handleResponse).then((data) => {
                dispatch(fetchTournamentsSuccess(data));
        });
    }
}
export function getSpecificTours(id) {
return dispatch => {
    dispatch(fetchStart());
    const request = new Request(`${apiBaseUrl}/get-filtered-tournaments/${id}`, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request).then(handleResponse).then((data) => {
        dispatch(fetchfilterTournamentsSuccess(data))
    });
}
}
export function getAllTourMatchs(id=0,idd=0) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-tournaments-matches/${id}/${idd}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchAllTournamentsMatches(data))
        });
    }
    }
    export function getSingleTour(id) {
        return dispatch => {
            dispatch(fetchStart());
            const request = new Request(`${apiBaseUrl}/get-single-tournament/${id}`, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' }),
            });
            return fetch(request).then(handleResponse).then((data) => {
                dispatch(fetchsingleTournamentSuccess(data))
            });
        }
        }

