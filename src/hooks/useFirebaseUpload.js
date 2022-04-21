import { useState, useEffect } from "react"
import { mediaStorage } from "../firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const useFirebaseUpload = (file) => {
	const [progress, setProgress] = useState(0)
	const [uploaderror, setUploadError] = useState(null)
	const [url, setUrl] = useState(null)

	const uploadFile = async () => {
		if (file) {
			return new Promise((resolve, reject) => {
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
						setUploadError(error)
						console.log(error)
						reject(error)
					},
					async () => {
						const downloadUrl = await getDownloadURL(
							uploadTask.snapshot.ref
						)
						setUrl(downloadUrl)
						console.log(downloadUrl)
						resolve(downloadUrl)
					}
				)
			})
		}
	}

	return { uploadFile, progress, url, uploaderror }
}

export default useFirebaseUpload
