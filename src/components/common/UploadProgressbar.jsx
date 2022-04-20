import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import useFirebaseUpload from "../../hooks/useFirebaseUpload"

const UploadProgressbar = ({ file, upload }) => {
	const { execute, url, progress, uploaderror } = useFirebaseUpload(file)
	const [start, setStart] = useState(upload)

	useEffect(() => {
		if (progress >= 100) {
			setStart(false)
		}
	}, [progress])

	return (
		<Typography variant="h3">
			{start ? `Uploading....<span>${progress}%</span>` : ""}
		</Typography>
	)
}

export default UploadProgressbar
