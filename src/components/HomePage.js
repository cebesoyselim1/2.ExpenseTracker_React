import React from "react";

import Alert from "./Alert";
import Loading from "./Loading";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";
import TotalExpenses from "./TotalExpenses";


const HomePage = (props) => {
    return <React.Fragment>
        <Alert/>
        <ExpenseForm/>
        <TotalExpenses/>
        <Loading/>
        <Expenses/>
    </React.Fragment>
}

export default HomePage;