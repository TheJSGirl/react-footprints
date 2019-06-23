import  uuid from 'uuid';
import * as constants from '../constants';

export function create (newExpense) {
    return  { 
        type: constants.CREATE_TEXT,  
        newExpense
    }    
}

export function remove (id) {
    return {
        type: constants.REMOVE_TEXT,
        id
    }
}

export function updatedTask(id, text) {
    return {
        type: constants.UPDATE_TEXT,
        id,
        text
    }
}