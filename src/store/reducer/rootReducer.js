import { combineReducers } from 'redux';
import matchReducer from './matchReducer';
import phoneRuleReducer from './phoneRuleReducer';
import sticketsReducer from './sticketsReducer';
import tournamentsReducer from './tournamentsReducer';
import gamesReducer from './gamesReducer';
import teamReducer from './teamReducer';
import rewardsReducer from './rewardsReducer';
import ordersReducer from './ordersReducer';
import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import messageReducer from './messageReducer';
import eventsReducer from './eventsReducer';
export default combineReducers({
    match: matchReducer,
    rules:phoneRuleReducer,
    stickets:sticketsReducer,
    tournaments:tournamentsReducer,
    games:gamesReducer,
    team:teamReducer,
    rewards:rewardsReducer,
    orders:ordersReducer,
    userDetails:userReducer,
    transactions:transactionsReducer,
    sendmess: messageReducer,
    events: eventsReducer
});