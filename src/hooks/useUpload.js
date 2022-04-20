import { useState, useEffect } from "react"
import { mediaStorage } from "../firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const useUpload = (file) => {
	const [progress, setProgress] = useState(0)
	const [uploaderror, setUploadError] = useState(null)
	const [url, setUrl] = useState(null)

	useEffect(() => {
		if (!file) return
		const storageRef = ref(mediaStorage, "images/" + file.name)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			"state_changed",
			(snap) => {
				const percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100
				console.log(percentage)
				setProgress(percentage)
			},
			(error) => {
				setUploadError(error)
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
					setUrl(downloadUrl)
					console.log(downloadUrl)
				})
			}
		)
	}, [file])
	return { progress, url, uploaderror }
}

export default useUpload
