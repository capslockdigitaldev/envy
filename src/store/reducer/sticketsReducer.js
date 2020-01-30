import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    groupData:[],
    alluserstickets:[]
}

const sticketsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_STICKETS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case types.FETCH_SINGLE_STICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            } 
            case types.FETCH_ALL_USERS_STICKETS_SUCCESS:
            return {
                ...state,
                loading: false,
                alluserstickets: action.payload
            }
        default:
            return state
    }
}

export default sticketsReducer;