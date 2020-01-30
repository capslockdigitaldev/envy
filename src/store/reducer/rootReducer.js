import { combineReducers } from 'redux';
import supportReducer from './supportReducer';
import phoneRuleReducer from './phoneRuleReducer';
import contactsReducer from './contactsReducer';
import teamextensionReducer from './teamextensionReducer';
import callHandleReducer from './callHandleReducer';
import smsReducer from './smsReducer';
import reportsReducer from './reportsReducer';
import didReducer from './didReducer';
import accessReducer from './accessReducer';


export default combineReducers({
    support: supportReducer,
    rules:phoneRuleReducer,
    contacts:contactsReducer,
    extensions:teamextensionReducer,
    callHandle:callHandleReducer,
    sms:smsReducer,
    reports:reportsReducer,
    did:didReducer,
    access:accessReducer


});