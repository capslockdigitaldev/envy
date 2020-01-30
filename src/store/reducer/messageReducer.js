import * as types from "../types/types";

const initalState = {
    loading: true,
    data: []
}

const messageReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
           
        default:
            return state
    }
}

export default messageReducer;