import { createStore, combineReducers } from 'redux';
import global from './reducers/global.js';

let store = createStore(combineReducers({
    global,
}))

export { //注意这里没有default
    store
};