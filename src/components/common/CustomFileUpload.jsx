import { CloudUpload } from "@mui/icons-material"
import { Box, styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useEffect, useRef, useState } from "react"
import empty from "../../images/empty.png"

const UploadContainer = styled(Box)(({ theme, file, empty }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	[theme.breakpoints.down("lg")]: {
		width: "50%",
	},
	[theme.breakpoints.up("xs")]: {
		width: "100%",
	},

	height: 80,
	padding: 20,
	marginBottom: 10,
	backgroundColor: grey[100],
	border: "1px solid",
	borderColor: grey[300],
	borderRadius: 5,
	cursor: "pointer",
	backgroundImage: `url({${file}})`,
}))

const DDlabel = styled("span")(({ theme }) => ({
	fontSize: 14,
	fontWeight: 300,
	padding: "5px 20px",
	textAlign: "center",
}))

const FileInput = styled("input")(({ theme }) => ({
	display: "none",
}))

const UploadIcon = styled(CloudUpload)(({ theme }) => ({
	color: grey[500],
}))

const SelectedFile = styled("span")(({ theme }) => ({
	fontSize: 14,
	fontWeight: 300,
}))

const ImagePreview = styled("img")(({ theme }) => ({
	width: "100%",
	maxHeight: 300,
	// marginTop: 10,
	objectFit: "contain",
}))

const ImageContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	maxHeight: 350,
	margin: "10px 0px",
	borderRadius: 5,
}))

const CustomFileUpload = ({ formdata = null, setformdata }) => {
	console.log(formdata)
	const [file, setFile] = useState(() => {
		return formdata.churchimg ? formdata.churchimg : empty
	})
	const hiddenFileInput = useRef(null)

	const handleClick = () => {
		hiddenFileInput.current.click()
	}

	const handleChange = (e) => {
		console.log(e.target.files[0])
		setFile(URL.createObjectURL(e.target.files[0]))
		if (formdata) {
			setformdata({
				...formdata,
				imagefile: e.target.files[0],
			})
		}
	}

	console.log(file)

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<ImageContainer>
				<ImagePreview src={file ? file : empty} />
			</ImageContainer>
			<UploadContainer onClick={handleClick}>
				<DDlabel>Click to Add/Change an Image</DDlabel>
				<FileInput
					type="file"
					ref={hiddenFileInput}
					onChange={handleChange}
				/>
				<UploadIcon />
				{file && (
					<SelectedFile>
						{file?.name} | {Math.round(file?.size / 1000)}KB
					</SelectedFile>
				)}
			</UploadContainer>
		</Box>
	)
}

export default CustomFileUpload
