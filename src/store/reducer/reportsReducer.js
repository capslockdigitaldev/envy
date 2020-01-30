  
 import * as types from "../types/types";

 const initalState = {
     loading: true,
     tab:'',
     call_data:[],
     sms_data:[]
 }
 
 const reportsReducer = (state = initalState, action) => {
     switch (action.type) {
         case types.FETCH_DATA_BEGIN:
             return {
                 ...state,
                 loading: true
             }
         case types.FETCH_REPORT_CALL_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 call_data: action.payload
             }
             case types.FETCH_REPORT_SMS_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 sms_data: action.payload
             }
             
         default:
             return state
     }
 }
 
 export default reportsReducer;