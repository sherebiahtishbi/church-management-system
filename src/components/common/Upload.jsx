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
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			borderRadius={2}
			padding={2}
			sx={{
				"&:hover": {
					boxShadow: 4,
				},
			}}
			backgroundImage={image}
		>
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
			</label>
			{/* <input
				accept="image/*"
				id="icon-button-file"
				type="file"
				style={{ display: "none" }}
				onChange={handleImage}
			/>
			<span style={{ color: "GrayText" }}>Upload Picture</span>
			<IconButton
				color="primary"
				aria-label="upload picture"
				component="span"
			>
				<PhotoCamera />
			</IconButton> */}
		</Box>
	)
}

export default Upload
