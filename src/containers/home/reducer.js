import objectAssign from "object-assign"
import ActionTypes from "./actionTypes"

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_UNIVERSITIES:
            return objectAssign({}, state, {
                fetchingUniversities: true,
            })
        case ActionTypes.SET_UNIVERSITIES:
            return objectAssign({}, state, {
                universities: action.data.universities,
                universitiesByCountry: action.data.universitiesByCountry,
                fetchingUniversities: false,
            })
        case ActionTypes.SEARCHING:
            return objectAssign({}, state, {
                searching: true,
            })
        case ActionTypes.SEARCH_RESULTS:
            return objectAssign({}, state, {
                searchResults: action.data,
            })
        default:
            return state
    }
}

export default reducer
