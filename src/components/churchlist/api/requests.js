import {
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
} from "../redux/churchListSlice"
import { secureApiRequest } from "../../../utils/util"
import { dummychurch } from "../../../dataobjects/dummies"

// get all churches from db for an account
export const getChurches = async (
	accountid,
	dummy = false,
	token,
	dispatch
) => {
	let updatedchurches
	const api = await secureApiRequest(token)
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
