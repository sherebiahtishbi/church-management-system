import { CloudUpload } from "@mui/icons-material"
import { Box, styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useRef, useState } from "react"
import empty from "../../images/empty.png"

const UploadContainer = styled(Box)(({ theme, file }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: 80,
	padding: 20,
	marginBottom: 10,
	backgroundColor: grey[100],
	border: "1px solid",
	borderColor: grey[300],
	borderRadius: 5,
	cursor: "pointer",
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
	height: 300,
	marginTop: 10,
	objectFit: "contain",
	// borderRadius: 5,
	// border: "1px solid",
	// borderColor: grey[200],
}))

const CustomFileUpload = () => {
	const [file, setFile] = useState(null)
	const hiddenFileInput = useRef(null)

	const handleClick = () => {
		hiddenFileInput.current.click()
	}

	const handleChange = (e) => {
		setFile(e.target.files[0])
	}

	return (
		<Box>
			<ImagePreview src={file ? URL.createObjectURL(file) : empty} />
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
