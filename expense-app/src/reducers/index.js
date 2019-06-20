import * as constants from '../constants';


export default (state=[], action) => {    
    switch(action.type) {
        case constants.CREATE_TEXT:
        return [
            ...state,
         {   expenses: [
            {    text: action.newExpense.text,
                id: action.newExpense.id}
         ]}

        ]
        case constants.REMOVE_TEXT: 
        return state.map((e) => {
            return e.expenses.filter(expense => expense.id !== action.id)
        })
          default :
        return state
    }
}