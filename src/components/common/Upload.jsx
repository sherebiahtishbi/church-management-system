import { PhotoCamera } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
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
		<Grid
			Container
			sx={{
				height: "50%",
				// marginTop: 25,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",

				flex: 1,
				// gap: 1,
			}}
		>
			<Grid
				item
				sx={{
					borderRadius: 2,
					backgroundColor: "primary.light",
				}}
			>
				<img
					src={image}
					style={{
						height: "auto",
						width: "100%",
						borderRadius: 5,
						objectFit: "contain",
						padding: 5,
					}}
				/>
			</Grid>
			<Grid item>
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
						style={{ marginTop: 2 }}
					>
						<PhotoCamera />
					</IconButton>
					Upload Image
				</label>
			</Grid>
		</Grid>
	)
}

export default Upload
