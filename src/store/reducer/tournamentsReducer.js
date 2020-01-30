import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    matchdata: [],
    tourdata: []
}

const tournamentsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_TOURNAMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_FILTER_TOURNAMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_ALL_TOURNAMENTS_MATCHES:
            return {
                ...state,
                loading: false,
                matchdata: action.payload,
                tourdata: action.payloadd
            }
            case types.FETCH_SINGLE_TOURNAMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
            
        default:
            return state
    }
}

export default tournamentsReducer;