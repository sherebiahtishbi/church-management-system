import axios from "axios"

export const publicApiRequest = axios.create({
	baseURL: "http://localhost:7501",
	withCredentials: true,
})

export const secureApiRequest = (token) => {
	if (!token) return null
	return axios.create({
		baseURL: "http://localhost:7501",
		withCredentials: true,
		headers: { authorization: `Bearer ${token}` },
	})
}
