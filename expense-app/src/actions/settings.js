import  uuid from 'uuid';
import * as constants from '../constants';

export function create (newExpense) {
    return  { 
        type: constants.CREATE_TEXT,  
        newExpense
    }    
}