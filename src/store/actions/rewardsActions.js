import * as actionTypes from '../types/types';
import {apiBaseUrl} from '../helpers/common';
import {handleResponse} from '../helpers/userServices';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_BEGIN
    }
}
export const fetchRewardsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_REWARDS_SUCCESS,
        payload: data.data
    }
}
export const fetchSingleRewardsSuccess = (data) => {
   
    return {
        type: actionTypes.FETCH_SINGLE_REWARDS_SUCCESS,
        payload: data.data
    }
}
export function getRewards() {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-rewards`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json'}),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchRewardsSuccess(data))
        });
    }
}
export function getSingleReward(id) {
    return dispatch => {
        dispatch(fetchStart());
        const request = new Request(`${apiBaseUrl}/get-single-reward/${id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json'}),
        });

        return fetch(request).then(handleResponse).then((data) => {
            dispatch(fetchSingleRewardsSuccess(data))
        });
    }
}
