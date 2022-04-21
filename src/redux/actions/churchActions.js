import {
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
	saveChurchStart,
	saveChurchSuccess,
	saveChurchFailure,
	updateChurchStart,
	updateChurchSuccess,
	updateChurchFailure,
} from "../slices/churchSlice"
import { dummychurch } from "../../dataobjects/dummies"

// get all churches from db for an account
export const getChurches = async (accountid, api, dispatch) => {
	let updatedchurches
	// const api = secureApiRequest(token)
	dispatch(getChurchesStart())
	try {
		const res = await api.get("/churches/")
		updatedchurches = [dummychurch, ...res.data]
		// console.log(updatedchurches)
		dispatch(getChurchesSuccess(updatedchurches))
	} catch (err) {
		dispatch(getChurchesFailure())
	}
}

//overarching function for add/update
export const saveChurch = async (formdata, api, dispatch) => {
	console.log(formdata)
	try {
		if (formdata._id) {
			await updateChurch(formdata, api, dispatch)
		} else {
			await createChurch(formdata, api, dispatch)
		}
	} catch (err) {}
}

//create new church
export const createChurch = async (formdata, api, dispatch) => {
	if (!formdata) throw new Error("missing form data")
	dispatch(saveChurchStart())
	console.log(formdata)
	try {
		// const api = secureApiRequest(token)
		const res = await api.post("/churches/save", formdata)
		dispatch(saveChurchSuccess(res.data))
	} catch (err) {
		dispatch(saveChurchFailure())
	}
}

//create new church
export const updateChurch = async (formdata, api, dispatch) => {
	if (!formdata) throw new Error("missing form data")

	dispatch(updateChurchStart())
	console.log(formdata)
	try {
		// const api = secureApiRequest(token)
		const res = await api.patch(
			`/churches/update/${formdata._id}`,
			formdata
		)
		dispatch(updateChurchSuccess(res.data))
	} catch (err) {
		dispatch(updateChurchFailure())
	}
}
