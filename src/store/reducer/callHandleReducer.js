  
 import * as types from "../types/types";

const initalState = {
    loading: true,
    tab:'',
}

const callHandleReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_TAB:
            return {
                ...state,
                loading: false,
                tab:'general',
            }
            
        default:
            return state
    }
}

export default callHandleReducer;