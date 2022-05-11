import {
	getAccountStart,
	getAccountSuccess,
	getAccountFailure,
	saveAccountStart,
	saveAccountSuccess,
	saveAccountFailure,
	updateAccountStart,
	updateAccountSuccess,
	updateAccountFailure,
} from "../slices/accountSlice"

// get all accounts from db for an account
export const getAccount = async (accountid, api, dispatch) => {
	dispatch(getAccountStart())
	try {
		const res = await api.get(`/accounts/${accountid}`)
		dispatch(getAccountSuccess(res.data))
	} catch (err) {
		dispatch(getAccountFailure())
	}
}

//overarching function for add/update
export const saveAccount = async (formdata, api, dispatch) => {
	console.log(formdata)
	try {
		if (formdata._id) {
			await updateAccount(formdata, api, dispatch)
		} else {
			await createAccount(formdata, api, dispatch)
		}
	} catch (err) {}
}

//create new account
export const createAccount = async (formdata, api, dispatch) => {
	if (!formdata) throw new Error("missing form data")
	dispatch(saveAccountStart())
	console.log(formdata)
	try {
		const res = await api.post("/accounts/save", formdata)
		dispatch(saveAccountSuccess(res.data))
	} catch (err) {
		dispatch(saveAccountFailure())
	}
}

//create new account
export const updateAccount = async (formdata, api, dispatch) => {
	if (!formdata) throw new Error("missing form data")

	dispatch(updateAccountStart())
	console.log(formdata)
	try {
		const res = await api.patch(
			`/accounts/update/${formdata._id}`,
			formdata
		)
		dispatch(updateAccountSuccess(res.data))
	} catch (err) {
		dispatch(updateAccountFailure())
	}
}
