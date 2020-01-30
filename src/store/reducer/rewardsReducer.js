  
 import * as types from "../types/types";

 const initalState = {
     loading: true,
     tab:'',
     data:[],
 }
 
 const rewardsReducer = (state = initalState, action) => {

     switch (action.type) {
         case types.FETCH_DATA_BEGIN:
             return {
                 ...state,
                 loading: true
             }
        
             case types.FETCH_REWARDS_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 data: action.payload
             }
             case types.FETCH_SINGLE_REWARDS_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 data: action.payload
             }
             
         default:
             return state
     }
 }
 
 export default rewardsReducer;