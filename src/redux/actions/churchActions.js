import {
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
	saveChurchStart,
	saveChurchSuccess,
	saveChurchFailure,
} from "../slices/churchSlice"
import { apiRequest as api } from "../../utils/util"
import { dummychurch } from "../../dataobjects/dummies"

// get all churches from db for an account
export const getChurches = async (accountid, dummy = false, dispatch) => {
	let updatedchurches
	// const api = secureApiRequest(token)
	dispatch(getChurchesStart())
	try {
		const res = await api.get("/churches/")
		if (dummy) {
			updatedchurches = [dummychurch, ...res.data]
			console.log(updatedchurches)
		}
		dispatch(getChurchesSuccess(updatedchurches))
	} catch (err) {
		console.log(err)
		dispatch(getChurchesFailure())
	}
}

//create new church
export const createChurch = (formdata, dispatch) => {
	if (!formdata) throw new Error("missing form data")
	dispatch(saveChurchStart())
	console.log(formdata)
	try {
		// const api = secureApiRequest(token)
		const res = api.post("/churches/save", formdata)
		dispatch(saveChurchSuccess(res.data))
	} catch (err) {
		dispatch(saveChurchFailure())
	}
}

//create new church
export const updateChurch = (formdata, id, dispatch) => {
	if (!formdata) throw new Error("missing form data")
	dispatch(saveChurchStart())
	console.log(formdata)
	try {
		// const api = secureApiRequest(token)
		const res = api.post("/churches/save", formdata)
		dispatch(saveChurchSuccess(res.data))
	} catch (err) {
		dispatch(saveChurchFailure())
	}
}
