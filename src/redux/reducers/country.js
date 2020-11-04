const initialState = {
    list: [],
    isLoading: false,
    isError: false,
    errMessage: null
}

const countryReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_ALL_COUNTRY_PENDING":
            return {...state, isLoading: true}
        case "GET_ALL_COUNTRY_FULFILLED":
            return {...state, isLoading: false, list: action.payload}
        case "GET_ALL_COUNTRY_REJECTED":
            return {...state, isLoading: false, isError: true, errMessage: 'server error'}
        default:
            return state
    }
}

export default countryReducer