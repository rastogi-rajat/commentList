const addressReducer = function(state={}, action) {
    if(action.type === "CHANGE_ADDRESS") {
        return {
            ...state,
            address: action.payload
        } 
    }
    return state;
}

export default addressReducer;