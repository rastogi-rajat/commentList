const commentReducer = function(state={commentList:[], error: false}, action) {
    if(action.type === "ADD_COMMENT") {
        const {commentList} = state;
        commentList.push(action.payload)
        return {
            ...state,
            commentList
        } 
    } else if(action.type === "SET_ERROR") {
        return {
            ...state,
            error: action.payload
        } 
    }
    return state;
}

export default commentReducer;