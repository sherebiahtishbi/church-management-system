import axios from "axios"
import {
	saveChurchStart,
	saveChurchSuccess,
	saveChurchFailure,
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
} from "../redux/churchSlice"

//base axios instance
export const apiRequest = () => {
	const apireq = axios.create({
		baseURL: "http://localhost:7501",
	})
}

// Church CRUD requests
// get all churches from db
export const getChurches = (dispatch) => {
	dispatch(getChurchesStart())
	try {
		const res = apiRequest.get("/")
		dispatch(getChurchesSuccess(res.data))
	} catch (err) {
		dispatch(getChurchesFailure(err))
	}
}

//get single church from db
export const getChurch = (id) => apiRequest.get(`/${id}`)

// create church in db
export const createChurch = (data, dispatch) => {
	dispatch(saveChurchStart())
	try {
		const res = apiRequest.post("/save")
		dispatch(saveChurchSuccess(res.data))
	} catch (err) {
		dispatch(saveChurchFailure(err))
	}
}

//update church in db
export const updateChurch = (id, data) =>
	apiRequest.patch(`/update/${id}`, data)

// delete church from db
export const deleteChurch = (id) => apiRequest.delete(`/${id}`)
