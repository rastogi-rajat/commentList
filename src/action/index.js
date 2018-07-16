export const changeAddress = (address) => {
    return {
        type:"CHANGE_ADDRESS",
        payload: address
    }
}

export const addComment = (comment) => {
    return {
        type:"ADD_COMMENT",
        payload: comment
    }
}

export const setError = (error) => {
    return {
        type:"SET_ERROR",
        payload: error
    }
}