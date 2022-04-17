import { CameraAltOutlined, PhotoCamera } from "@mui/icons-material"
import { Grid, IconButton, Box } from "@mui/material"
import React, { useState } from "react"
import { styled } from "@mui/system"
import { grey } from "@mui/material/colors"
import empty from "../../images/empty.png"

const ImageContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	height: 300,
	backgroundColor: grey[100],
	marginRight: 30,
	border: "1px solid",
	borderColor: grey[200],
	borderRadius: 5,
}))

const Image = styled("img")(({ theme }) => ({
	height: "100%",
	width: "auto",
}))

const EmptyImage = styled(CameraAltOutlined)(({ theme }) => ({
	height: "100%",
	width: "100%",
	color: grey[300],
}))

const UploadButtonContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginTop: 10,
}))

const UploadButton = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
}))

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
		<>
			<ImageContainer>
				{image ? <Image src={image} alt="image" /> : <EmptyImage />}
			</ImageContainer>
			<UploadButtonContainer>
				<UploadButton>
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
				</UploadButton>
			</UploadButtonContainer>
		</>
	)
}

export default Upload
