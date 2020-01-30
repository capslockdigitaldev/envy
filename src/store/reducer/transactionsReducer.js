import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    allusertansacs:[]
}

const transactionsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_ALL_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                allusertansacs: action.payload
            }
           
        default:
            return state
    }
}

export default transactionsReducer;