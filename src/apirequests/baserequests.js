import axios from "axios"

//secure request with auth cookie
export const secureRequest = () => {}

//public request
export const publicRequest = () => {
	const apireq = axios.create({
		baseURL: "http://localhost:7501",
	})
}

//normal request
export const apiRequest = () => {
	const apireq = axios.create({
		baseURL: "http://localhost:7501",
	})
}
