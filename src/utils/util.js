import axios from "axios"

const BASEAPI_URL = "http://localhost:7501"
const token = localStorage.getItem("_cms_tk")

//base public axios instance
export const publicApiRequest = axios.create({
	baseURL: "http://localhost:7501",
})

//base secure axios instance
export const secureApiRequest = axios.create({
	baseURL: "http://localhost:7501",
	headers: { authorization: `Bearer ${token}` },
	withCredentials: true,
})
