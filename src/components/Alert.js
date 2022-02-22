import React from "react";

import { connect } from "react-redux";

const Alert = (props) => {
    
    return <React.Fragment>
        {
            props.Alert &&
            <div className={`alert alert-${props.Alert.alertType} mb-4`} >
                {props.Alert.alertMessage}
            </div>
        }
    </React.Fragment>
}

const mapStateToProps = (state) => ({
    Alert: state.AlertReducer
})

export default connect(mapStateToProps)(Alert);