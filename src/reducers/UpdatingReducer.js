const initialState = {
    updatingExpense: { id: null, name: "", price: "" },
}

const UpdatingReducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_UPDATING_EXPENSE":
            return {
                updatingExpense: {
                    id: action.updatingExpense.id,
                    name: action.updatingExpense.name,
                    price: action.updatingExpense.price
                }
            };
        case "CLEAR_UPDATING_EXPENSE":
            return {
                updatingExpense: {
                    id: "",
                    name: "",
                    price: ""
                }
            };
        default:
            return state;
    }
}

export default UpdatingReducer;