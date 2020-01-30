import * as types from "../types/types";

const IntialState = {
    loading:true,
    data:[],
    rulesList:[],
    ivrList:[],
    hourList:[],
    didData:[]
}

const phoneRuleReducer = (state=IntialState,action)=>{
    switch(action.type){
        case types.FETCH_DATA_BEGIN:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_DID_SUCCESS:
            return{
                ...state,
                didData:action.payload,
                loading:false
            }
        case types.FETCH_RULES_SUCCESS:
            return{
                ...state,
                rulesList:action.payload,
                loading:false
            }
        case types.FETCH_IVR_SUCCESS:
            return{
                ...state,
                ivrList:action.payload,
                loading:false
            }
        case types.FETCH_HOURS_SUCCESS:
            return{
                ...state,
                hourList:action.payload,
                loading:false
            }
        default:
            return state;
    }
};

export default phoneRuleReducer;