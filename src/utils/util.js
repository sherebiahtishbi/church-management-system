import axios from "axios"

//base axios instance
export const apiRequest = axios.create({
	baseURL: "http://localhost:7501",
})
