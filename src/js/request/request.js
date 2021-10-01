import API from './api'
import endpoints from './endpoint';
const request = {
	getAllUniversity: () => {
		const requestUrl = endpoints.GET_ALL_UNIVERSITY.endpoint();
		return API.get(requestUrl);
	},
	findUniversities: (name, country) => {
		const requestUrl = endpoints.FIND_UNIVERSITY.endpoint(name, country);
		return API.get(requestUrl);
	}
}

export default request;