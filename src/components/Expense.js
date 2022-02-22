import React from "react";
import { connect } from "react-redux";

import { DeleteExpense, SetLoading } from "../actions/ExpenseAction";
import { SetUpdatingExpense, ClearUpdatingExpense, SetEditState } from "../actions/UpdatingAction";
import { SetAlert, ClearAlert } from "../actions/AlertAction";

const Expense = (props) => {

    //Delete Expense
    const Delete = () => {
        if(props.expense.id){

            if(props.updatingExpense){
                if(props.expense.id == props.updatingExpense.id){
                    props.dispatch(ClearUpdatingExpense());
                }
            }

            props.dispatch(DeleteExpense(props.expense.id));
            
            setTimeout(() => {
                props.dispatch(SetLoading(false));
                Set("success",`${props.expense.name} has successfully been deleted.`);
            }, 1000);
            
        }
    }

    //Set Updating Expense
    const Update = () => {
        if(props.expense.id){
            props.dispatch(SetUpdatingExpense(props.expense.id,props.expense.name,props.expense.price));
        }
    }

    // Set Alert
    const Set = (alertType,alertMessage) => {
        props.dispatch(SetAlert(alertType,alertMessage));
        setTimeout(() => {
            props.dispatch(ClearAlert());
        }, 2500);
    }
 
    return <React.Fragment>
        <tr className={props.expense.price >= 0 ? "table-success" : "table-danger"}>
            <td>{props.expense.name}</td>
            <td>{props.expense.price} <span className="fa-solid fa-turkish-lira-sign"></span></td>
            <td>
                <button className="btn btn-warning w-100" onClick={Update}>
                    <span className="fa-solid fa-pen-to-square"></span>
                </button>
            </td>
            <td>
                <button className="btn btn-danger w-100" onClick={Delete}>
                    <span className="fa-solid fa-ban"></span>
                </button>
            </td>
        </tr>
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    updatingExpense: state.UpdatingReducer.updatingExpense
})

export default connect(mapStateToProps)(Expense);