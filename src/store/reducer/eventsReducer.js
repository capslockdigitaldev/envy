  
 import * as types from "../types/types";

 const initalState = {
     loading: true,
     allevents: [],
     singleevent: [],
 }
 
 const eventsReducer = (state = initalState, action) => {
     switch (action.type) {
         case types.FETCH_EVENTS_BEGIN:
             return {
                 ...state,
                 loading: true
             }
         case types.FETCH_EVENT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 allevents: action.payload
             }
             case types.FETCH_SINGLE_EVENT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 singleevent: action.payload
             }
            
             
         default:
             return state
     }
 }
 
 export default eventsReducer;