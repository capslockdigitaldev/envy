import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    teamData:[],
    extData:[],
    is_search:false,
    extDataNotInTeam:[]
}

const teamextensionReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_EXTENSION_SUCCESS:
            return {
                ...state,
                loading: false,
                is_search:false,
                data: action.payload
            }
            case types.FETCH_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                teamData:action.payload
            }
            case types.FETCH_EXTENSION_SEARCH_SUCCESS:
                return{
                 ...state,
                 loading:false,
                 is_search:true,
                 extData:action.payload
                }
            case types.FETCH_EXTENSION_NOT_IN_TEAM_SUCCESS:
                return{
                 ...state,
                 loading:false,
                 extDataNotInTeam:action.payload
                }
        default:
            return state
    }
}

export default teamextensionReducer;