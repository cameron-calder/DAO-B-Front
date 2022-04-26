import {combineReducers} from 'redux'
import BonusReducer from './totalBonus';
import UserReducer from "./users";

export const reducers =  combineReducers({
    users: UserReducer,
    totalBonus:BonusReducer
    // proposals: BonusesReducer,

})