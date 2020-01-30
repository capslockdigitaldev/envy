  
 import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    singlegamedata: [],
}

const gamesReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_GAMES_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_SINGLE_GAME_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    singlegamedata: action.payload
                }
            
        default:
            return state
    }
}

export default gamesReducer;