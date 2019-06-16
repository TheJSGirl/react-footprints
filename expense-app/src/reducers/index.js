import * as constants from '../constants';


export default (state=[], action) => {
    console.log("state---", state);
    console.log("actions", action);
    switch(action.type) {
        case constants.CREATE_TEXT:
        return [
            ...state,
         {   expenses: [
            {    text: action.newExpense.text,
                id: action.newExpense.id}
         ]}

        ]
        default :
        return state
    }
}