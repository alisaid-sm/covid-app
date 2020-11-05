const initialState = {
    list: [],
    isLoading: false,
    isError: false,
    errMessage: null
}

const coronaReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL_CORONA_PENDING":
            return {...state, isLoading: true}
        case "GET_DETAIL_CORONA_FULFILLED":
            return {...state, isLoading: false, list: action.payload}
        case "GET_DETAIL_CORONA_REJECTED":
            return {...state, isLoading: false, isError: true, errMessage: 'server error'}
        default:
            return state
    }
}

export default coronaReducer