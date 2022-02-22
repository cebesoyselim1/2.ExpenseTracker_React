import React from "react";

import { connect } from "react-redux";

import Expense from "./Expense";

const Expenses = (props) => {
    
    return <React.Fragment>
        {
            props.Expenses.length > 0 && props.isLoading == false ?
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Expenses.map((expense,index) => (<Expense key={index} expense={expense}/>))
                    }
                </tbody>
            </table>
            :
            props.isLoading == false &&
            <div className="alert alert-danger">
                No Expense Found.
            </div>
            
        }
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    Expenses: state.ExpenseReducer.expenses,
    isLoading: state.ExpenseReducer.isLoading
})

export default connect(mapStateToProps)(Expenses);