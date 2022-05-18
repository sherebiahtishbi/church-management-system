import { styled } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { menuOptions } from "../../dataobjects/churchmenu"
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material"
import { Edit } from "@mui/icons-material"
import userimg from "../../images/anu_profile.jpg"

const CvContainer = styled("div")(({ theme }) => ({
	display: "flex",
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	padding: 10,
	[theme.breakpoints.down("lg")]: {
		padding: 10,
		flexDirection: "column",
	},
	height: "100vh",
	gap: 20,
}))

const CvLeftbar = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.cms.text100,
	alignItems: "flex-start",
	justifyContent: "flex-start",
	padding: 10,
	height: "100%",
	flex: 1,
	position: "sticky",
	top: 200,
}))

const CvRightbar = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	[theme.breakpoints.up("md")]: {
		flex: 6,
	},
	[theme.breakpoints.down("md")]: {
		flex: 1,
	},
	// backgroundColor: "#e0381f",
	height: "100vh",
	rowGap: 10,
}))

const CvRightTop = styled("div")(({ theme }) => ({
	display: "flex",
	width: "100%",
	flex: 1,
	justifyContent: "space-between",
	minHeight: 150,
	marginTop: 10,
	fontSize: "3rem",
	color: theme.palette.cms.text600,
	// backgroundColor: theme.palette.cms.text50,
}))

const CvTitle = styled("div")(({ theme }) => ({
	flex: 1,
}))

const CvName = styled("div")(({ theme }) => ({
	color: theme.palette.cms.text600,
	fontSize: "3rem",
}))

const CvAddress = styled("div")(({ theme }) => ({
	color: theme.palette.cms.text600,
	fontSize: "1.5rem",
}))

const CvPastor = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginTop: 5,
	gap: 5,
}))

const CvControls = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "end",
	flex: 1,
	marginRight: 10,
}))

const CvRightBottom = styled("div")(({ theme }) => ({
	display: "flex",
	// backgroundColor: "#8B3FC0",
	width: "100%",
	flex: 5,
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
	gap: 5,
}))

const CvImageSection = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	flex: 1,
	maxHeight: 400,
	borderColor: theme.palette.cms.text200,
	borderRadius: 5,
}))

const CvImageContainer = styled("div")(({ theme }) => ({
	boxShadow: 10,
	height: 400,
}))

const CvImage = styled("img")(({ theme }) => ({
	padding: 2,
	objectFit: "contain",
	height: "auto",
	width: "100%",
	borderRadius: 10,
	boxShadow: 10,
}))

const CvInfo = styled("p")(({ theme }) => ({
	display: "flex",
	paddingLeft: 20,
	paddingRight: 20,
	// border: "1px solid",
	// borderColor: theme.palette.cms.text200,
	borderRadius: 5,
	[theme.breakpoints.down("lg")]: {
		flex: 1,
	},
	[theme.breakpoints.up("md")]: {
		flex: 2,
	},
	whiteSpace: "pre-line",
	color: theme.palette.cms.text600,
}))

const CvMenuItem = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	width: "95%",
	height: 40,
	overflow: "hidden",
	marginBottom: 5,
	padding: 20,
	borderRight: "6px solid",
	borderLeft: "6px solid",
	borderColor: "transparent",
	borderRadius: 5,
	gap: 10,
	color: theme.palette.cms.text600,
	"&:hover": {
		// backgroundColor: "#8B3FC0",
		backgroundColor: theme.palette.cms.text200,
		// color: "white",
		cursor: "pointer",
		borderRight: "6px solid",
		borderLeft: "6px solid",
		borderColor: theme.palette.cms.text200,
		color: theme.palette.cms.text700,
	},
}))

const CvMenuText = styled("span")(({ theme }) => ({
	// color: theme.palette.cms.text600,
}))

const ChurchView = () => {
	const [church, setChurch] = useState(null)
	const { churches } = useSelector((state) => state.church)
	const params = useParams()

	useEffect(() => {
		const getChurch = () => {
			if (params) {
				let data
				if (churches.length > 0) {
					let data = churches.find(
						(church) => church._id === params.id
					)
					if (data) {
						setChurch({ ...data })
					}
				}
			}
		}
		getChurch()
	}, [])

	console.log(church)

	return (
		<CvContainer>
			{church ? (
				<>
					<CvLeftbar>
						{menuOptions.map((menu) => (
							<CvMenuItem key={menu.id}>
								{menu.icon}
								<CvMenuText>{menu.text}</CvMenuText>
							</CvMenuItem>
						))}
					</CvLeftbar>
					<CvRightbar>
						<CvRightTop>
							<CvTitle>
								<CvName>{church.churchname}</CvName>
								<CvAddress>
									{church.address.address1},{" "}
									{church.address.city},{church.address.state}{" "}
									| Phone# {church.address.phone1}
								</CvAddress>
								<CvPastor>
									<Avatar src={userimg}></Avatar>
									<Typography>
										Anugrah Tisbi, Senior Pastor
									</Typography>
								</CvPastor>
							</CvTitle>
							<CvControls>
								<Tooltip title="Modify Details">
									<IconButton component="div" variant="h4">
										<Edit />
									</IconButton>
								</Tooltip>
							</CvControls>
						</CvRightTop>

						<CvRightBottom>
							<CvImageSection>
								{/* <CvImageContainer> */}
								<CvImage src={church.churchimg} />
								{/* </CvImageContainer> */}
							</CvImageSection>
							<CvInfo>{church.description}</CvInfo>
						</CvRightBottom>
					</CvRightbar>
				</>
			) : (
				<Typography variant="h3" color="cms.text600" textAlign="center">
					Church Details not found!
				</Typography>
			)}
		</CvContainer>
	)
}

export default ChurchView
