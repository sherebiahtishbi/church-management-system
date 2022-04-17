import { apiRequest } from "../utils/util"
import { goodToGo, unAuthorized } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useApi = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		apiRequest.interceptors.response.use(
			(response) => {
				// console.log("good response")
				dispatch(goodToGo())
				return response
			},
			(error) => {
				// console.log(error)
				dispatch(unAuthorized())
				if ([400, 401, 403].includes(error.response.status))
					navigate("/unauthorized")
			}
		)
	})
	return apiRequest
}

export default useApi
