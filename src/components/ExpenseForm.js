import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { AddExpense, UpdateExpense, SetLoading } from "../actions/ExpenseAction";
import { SetUpdatingExpense, ClearUpdatingExpense } from "../actions/UpdatingAction";
import { SetAlert, ClearAlert } from "../actions/AlertAction";


const ExpenseForm = (props) => {
    const [name,setName] = useState(props.updatingExpense.name);
    const [price,setPrice] = useState(props.updatingExpense.price);

    useEffect(() => {
        props.dispatch(SetUpdatingExpense(props.updatingExpense.id,name,props.updatingExpense.price));
    },[name])

    useEffect(() => {
        props.dispatch(SetUpdatingExpense(props.updatingExpense.id,props.updatingExpense.name,price));
    },[price])

    // Add Expense
    const Add_Update = (e) => {
        if(props.updatingExpense.id){
            //Update
            if(CheckValidate(props.updatingExpense.name,props.updatingExpense.price)){
                props.dispatch(UpdateExpense(props.updatingExpense.id,{ name: props.updatingExpense.name, price: props.updatingExpense.price }));
                setTimeout(() => {
                    props.dispatch(SetLoading(false));
                    Set("success",`${props.updatingExpense.name} has successfully been updated.`);
                    props.dispatch(ClearUpdatingExpense());
                }, 1000);
            }
        }else{
            //Add
            if(CheckValidate(name,price)){
                props.dispatch(AddExpense(name,price));
                setTimeout(() => {
                    props.dispatch(SetLoading(false));
                    Set("success",`${name} has successfully been added.`);
                    props.dispatch(ClearUpdatingExpense());
                }, 1000);
            }
        }
        
        setName("");
        setPrice("");

        e.preventDefault();
    }

    // Set Alert
    const Set = (alertType,alertMessage) => {
        props.dispatch(SetAlert(alertType,alertMessage));
        setTimeout(() => {
            props.dispatch(ClearAlert());
        }, 2500);
    }

    const CheckValidate = (name,price) => {
        //Check length
        if(name.length < 1){
            Set("danger","Name must has at least 2 characters.")
            return false;
        }
        if(name.length > 30){
            Set("danger","Name must has at most 30 characters.")
            return false;
        }

        //Check whether it is exist
        if(!price){
            Set("danger","Price required.");
            return false;
        }
        //Check whether it is number
        if(typeof Number(price) !== "number"){
            Set("danger","Price must be a number.");
            return false;
        }
        //Check price is between -10.000.000 and 10.000.000 
        if(price <= -10000000){
            Set("danger","Price must be greater than -10.000.000");
            return false;
        }
        if(price > 10000000){
            Set("danger","Price must be lower then 10.000.000");
            return false;
        }
        return true;

    }

    return <React.Fragment>
        <div className="card mb-4">
            <div className="card-header">
                {
                    props.updatingExpense.id ?
                    "Update Expense"
                    :
                    "Add Expense"
                }
            </div>
            <div className="card-body">
                <form className="form" onSubmit={Add_Update}>
                    <div className="form-group mb-2">
                        <label className="form-text">Name</label>
                        <input type="text" id="name" className="form-control" value={props.updatingExpense.name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-text">Price</label>
                        <input type="number" id="price" className="form-control" value={props.updatingExpense.price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-2">
                    {
                        props.updatingExpense.id ?
                        "Update Expense"
                        :
                        "Add Expense"
                    }
                    </button>
                </form>
            </div>
        </div>
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    updatingExpense: state.UpdatingReducer.updatingExpense
})

export default connect(mapStateToProps)(ExpenseForm);