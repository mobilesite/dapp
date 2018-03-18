import * as types from '../types.js';

export function global(state, action){
    switch(action.type){
        case types.OPEN_MODAL:
            const id = action.payload;
            let newState = {...state};
            if(!newState.modals[id]){
                newState.modals[id] = {}
            }
            newState.modals[id].isOpen = true;
            return newState;
        case types.OPEN_MODAL:
            const id = action.payload;
            let newState = {...state};
            if(!newState.modals[id]){
                newState.modals[id] = {}
            }
            newState.modals[id].isOpen = false;
            return newState;
        default: 
            return state;
    }
}