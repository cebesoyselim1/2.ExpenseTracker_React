
export const SetUpdatingExpense = (id,name,price) => ({
    type: "SET_UPDATING_EXPENSE",
    updatingExpense: {
        id: id,
        name: name,
        price: price
    }
});

export const ClearUpdatingExpense = () => ({
    type: "CLEAR_UPDATING_EXPENSE"
});