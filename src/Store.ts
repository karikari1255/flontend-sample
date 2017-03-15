import { counter } from './counter/Reducer'
import { chart } from './chart/Reducer'
import { createStore, combineReducers } from 'redux'

export default createStore(
    combineReducers({
        counter,
        chart
    })
);