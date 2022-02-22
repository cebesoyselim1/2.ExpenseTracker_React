import React from "react";
import { connect } from "react-redux";

const TotalExpenses = (props) => {

    return <React.Fragment>
        {
            <div className="card mb-4">
                <h1 className="card-header text-center">Total Expense</h1>
                <div className="card-body">
                    <div className="display-4 text-center">
                        {props.total} <span className="fa-solid fa-turkish-lira-sign"></span>
                    </div>
                </div>
            </div>
        }
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    total : Object.keys(state.ExpenseReducer.expenses).reduce((prev,key) => Number(prev) + Number(state.ExpenseReducer.expenses[key].price),0)
})

export default connect(mapStateToProps)(TotalExpenses);