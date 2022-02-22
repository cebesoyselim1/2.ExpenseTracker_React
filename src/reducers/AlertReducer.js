
const AlertReducer = (state = null, action) => {
    switch(action.type){
        case "SET_ALERT":
            return action.alert;
        case "CLEAR_ALERT":
            return null
        default:
            return state;
    }
}

export default AlertReducer;