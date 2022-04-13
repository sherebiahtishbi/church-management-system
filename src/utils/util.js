import axios from "axios"

export const apiRequest = axios.create({
	baseURL: "http://localhost:7501",
	withCredentials: true,
})
