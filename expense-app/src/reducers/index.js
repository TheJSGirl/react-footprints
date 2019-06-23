import * as constants from '../constants';

const iniitialState = {
    expenses: []
}
export default (state=iniitialState, action) => {    
    switch(action.type) {
        case constants.CREATE_TEXT:
            return {
                ...state,
                expenses: [action.newExpense, ...state.expenses],
              };
        
        case constants.REMOVE_TEXT: 
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.id)
        }

        case constants.UPDATE_TEXT: 
            return {
                ...state,
                    expenses: state.expenses.map((e) => {
                            if(e.id === action.id) {
                                        return { id: e.id, text: action.text}
                                    }
                                    return e;                                
                            })
                
                    }
          default :
        return state
    }
}