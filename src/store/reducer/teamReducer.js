import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    dataa:[],
    messageData:[],
    allusersteams:[]
}

const teamReducer = (state = initalState, action) => {

    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_ALL_USERS_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                allusersteams: action.payload
            }
            case types.FETCH_SINGLE_TEAM_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    dataa: action.payload
                }
                case types.FETCH_SINGLE_TEAM:
                return {
                    ...state,
                    loading: false,
                    daataa: action.payload
                }
        default:
            return state
    }
}

export default teamReducer;