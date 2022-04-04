import {
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
} from "../redux/churchListSlice"
import { apiRequest } from "../../../utils/util"
import dummychurch from "../../../dataobjects/dummies"

// get all churches from db for an account
export const getChurches = async (accountid, dummy = false, dispatch) => {
	let updatedchurches
	dispatch(getChurchesStart())
	try {
		const res = await apiRequest.get("/churches/")
		if (dummy) {
			updatedchurches = [dummy, ...res.data]
		}
		dispatch(getChurchesSuccess(updatedchurches))
	} catch (err) {
		console.log(err)
		dispatch(getChurchesFailure())
	}
}
