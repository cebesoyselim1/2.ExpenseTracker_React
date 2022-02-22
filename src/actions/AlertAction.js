
export const SetAlert = (alertType,alertMessage) => ({
    type: "SET_ALERT",
    alert: {
        alertType: alertType,
        alertMessage: alertMessage
    }
});

export const ClearAlert = () => ({
    type: "CLEAR_ALERT",
})