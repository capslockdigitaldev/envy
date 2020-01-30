import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
}

const matchReducer = (state = initalState, action) => {
    switch (action.type) {
       
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_DATA_SUCCESS:
            return {
                
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_MATCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_MATCH_BY_ID_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload
                }
                case types.FETCH_DATA_ACTIVE_MATCHES_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload
                }
        default:
            return state
    }
}

export default matchReducer;