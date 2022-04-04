import { PhotoCamera } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import React, { useState } from "react"

const Upload = () => {
	const [image, setImage] = useState(null)

	const handleImage = (e) => {
		console.log(e)
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]))
			console.log(image)
		}
	}
	return (
		<Box
			sx={{
				border: "1px solid gray",
				padding: 1,
				borderRadius: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				backgroundColor: "#f5f5f5",
				gap: 1,
			}}
		>
			<img
				src={image}
				style={{
					height: 200,
					width: "auto",
					borderRadius: 5,
				}}
			/>
			<label htmlFor="icon-button-file">
				<input
					accept="image/*"
					id="icon-button-file"
					type="file"
					style={{ display: "none" }}
					onChange={handleImage}
				/>
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="span"
				>
					<PhotoCamera />
				</IconButton>
				Upload Picture
			</label>
		</Box>
	)
}

export default Upload
