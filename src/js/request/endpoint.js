const endpoints = {
	GET_ALL_UNIVERSITY: {
		endpoint: () => '/search?name&country',
		method: 'GET'
	},
	FIND_UNIVERSITY: {
		endpoint: (name, country) => `/search?name=${name||''}&country=${country||''}`,
		method: 'GET'
	}
}
export default endpoints;