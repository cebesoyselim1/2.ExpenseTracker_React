import {v4 as uuid} from 'uuid';

export const PopulateExpense = (expenses) => ({
    type: "POPULATE_EXPENSES",
    expenses: expenses
});

export const AddExpense = (name,price) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        name: name,
        price: price
    }
});

export const UpdateExpense = (id,changes) => ({
    type: "UPDATE_EXPENSE",
    id: id,
    changes: changes
});

export const DeleteExpense = (id) => ({
    type: "DELETE_EXPENSE",
    id: id
});

export const SetLoading = (isLoading) => ({
    type: "SET_LOADING",
    isLoading: isLoading
});