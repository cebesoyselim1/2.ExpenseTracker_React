import React from "react";
import { connect } from "react-redux";

const Loading = (props) => {
    
    return <React.Fragment>
        {
            props.isLoading &&
            <div className="text-center mb-4">
                <div className="spinner-border icon-xl"></div>
            </div>
        }
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    isLoading: state.ExpenseReducer.isLoading
})

export default connect(mapStateToProps)(Loading);