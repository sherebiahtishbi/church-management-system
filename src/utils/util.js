import axios from "axios"
import { useNavigate } from "react-router-dom"

export const apiRequest = axios.create({
	baseURL: "http://localhost:7501",
	withCredentials: true,
})

// apiRequest.interceptors.response.use(
// 	(response) => response,
// 	(err) => {
// 		const navigate = useNavigate()
// 		console.log(err)
// 		if ([400, 401, 403].includes(err.response.statusCode)) navigate("/")
// 	}
// )
