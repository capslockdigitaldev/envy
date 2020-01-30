import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    contactsData:[],
    messageData:[]
}

const smsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contactsData: action.payload
            }
            case types.FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messageData: action.payload
            }
        default:
            return state
    }
}

export default smsReducer;