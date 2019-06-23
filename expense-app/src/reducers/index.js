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

        // case constants.UPDATE_TEXT: 
        //     return state.map((e) => {
        //         e.expenses.map((expense) => {
        //             if(expense.id === action.id) {
        //                 return {...expense, text: action.text}
        //             }
        //             return expense;
        //         })
        //         // this.setState({expenses: action.text});
        //     })
        case constants.UPDATE_TEXT: 
            return [
                ...state,
                {
                    expenses: state.map((e) => {
                                e.expenses.map((expense) => {
                                    if(expense.id === action.id) {
                                        return {...expense, text: action.text}
                                    }
                                    return expense;
                                })
                                // this.setState({expenses: action.text});
                            })
                }
            ]
          default :
        return state
    }
}