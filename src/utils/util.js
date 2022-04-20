import axios from "axios"
import { useNavigate } from "react-router-dom"

export const apiRequest = axios.create({
	baseURL: "http://localhost:7501",
	withCredentials: true,
})
