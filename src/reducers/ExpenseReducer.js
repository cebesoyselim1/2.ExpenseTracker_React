
const initialState = {
    expenses: [],
    isLoading: false
}

const ExpenseReducer = (state=initialState,action) => {
    switch(action.type){
        case "POPULATE_EXPENSES":
            return {
                ...state,
                expenses: action.expenses,
                isLoading: true
            };
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.expense
                ],
                isLoading: true
            };
        case "UPDATE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map((expense) => {
                    if(expense.id == action.id){
                        return {
                            id: action.id,
                            ...action.changes
                        }
                    }else{
                        return expense;
                    }
                }),
                isLoading: true
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id != action.id),
                isLoading: true
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}

export default ExpenseReducer;