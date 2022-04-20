import { useState, useEffect } from "react"
import { mediaStorage } from "../firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const useFirebaseUpload = (file) => {
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState(null)
	const [url, setUrl] = useState(null)

	useEffect(() => {
		if (file) {
			const storageRef = ref(mediaStorage, "images/" + file?.name)
			const uploadTask = uploadBytesResumable(storageRef, file)

			uploadTask.on(
				"state_changed",
				(snap) => {
					const percentage = Math.round(
						(snap.bytesTransferred / snap.totalBytes) * 100
					)
					console.log(percentage)
					setProgress(percentage)
				},
				(error) => {
					setError(error)
					console.log(error)
				},
				async () => {
					const downloadUrl = await getDownloadURL(
						uploadTask.snapshot.ref
					)
					setUrl(downloadUrl)
					console.log(downloadUrl)
				}
			)
		}
	}, [file])

	return { progress, url, error }
}

export default useFirebaseUpload
