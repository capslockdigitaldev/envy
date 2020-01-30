import { apiBaseUrl} from '../helpers/common';
import * as actionTypes from '../types/types';
import {handleResponse} from '../helpers/userServices';


export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_GAMES_BEGIN
    }
}

export const fetchgamesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_GAMES_SUCCESS,
        payload: data.data
    }
}
export const fetchsinglegameSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SINGLE_GAME_SUCCESS,
        payload: data.data
    }
}
export function getAllgames() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-games`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchgamesSuccess(data))
        });
    }
}
export function getSinglegame(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-single-game/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchsinglegameSuccess(data))
        });
    }
}