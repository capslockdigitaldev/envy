import * as types from "../types/types";

const initalState = {
    loading: true,
    data: []
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case types.FETCH_ALL_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload
                }
                case types.FETCH_USERS_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        data: action.payload
                    }
        default:
            return state
    }
}

export default userReducer;