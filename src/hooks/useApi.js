import { apiRequest } from "../utils/util"
import { goodToGo, unAuthorized } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useApi = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	apiRequest.interceptors.response.use(
		(response) => {
			dispatch(goodToGo())
			return response
		},
		(error) => {
			dispatch(unAuthorized())
			if ([400, 401, 403].includes(error.response.status)) navigate("/")
		}
	)
	return apiRequest
}

export default useApi
