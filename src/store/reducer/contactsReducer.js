import * as types from "../types/types";

const initalState = {
    loading: true,
    data: [],
    groupData:[],
}

const contactsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case types.FETCH_GROUP_SUCCESS:
            return{
                ...state,
                groupData:action.payload,
                loading:false
            }
        default:
            return state
    }
}

export default contactsReducer;