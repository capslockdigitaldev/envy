import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    allusersorders:[]
}

const ordersReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_ALL_USERS_ORDER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    allusersorders: action.payload
                }
        default:
            return state
    }
}

export default ordersReducer;