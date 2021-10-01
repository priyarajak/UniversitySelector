import ActionTypes from './actionTypes';
import universitiesParser from '../../shared/parser'
import request from '../../js/request/request'
const fetchingUniversity = () => ({
	type: ActionTypes.FETCH_UNIVERSITIES
});

const setUniversities = (data) => ({
	type: ActionTypes.SET_UNIVERSITIES,
	data
});

const setSearchResults = (data) => ({
	type: ActionTypes.SEARCH_RESULTS,
	data
})

const searching = (data) => ({
	type: ActionTypes.SEARCHING,
	data
})



const getAllUniversity = () => (dispatch) => {
	dispatch(fetchingUniversity())
	return request.getAllUniversity().then(response => {
		dispatch(setUniversities({
            universities : universitiesParser((response && response.data) || []),
            universitiesByCountry: universitiesParser((response && response.data) || [], 'country'),
        }))
	}).catch(err => {
		dispatch(setUniversities({}))
	})
}

const searchUniversities  = (university, country) => (dispatch) => {
	dispatch(searching())
	return request.findUniversities(university, country).then(response => {
		dispatch(setSearchResults(
          universitiesParser((response && response.data) || []),
         ))
	}).catch(err => {
        dispatch(setSearchResults(
          null
           ))
		console.log('error')
	})
}
export default {
	getAllUniversity,
    searchUniversities,
    setSearchResults
}