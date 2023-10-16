import React, { useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logoWhite from "/logo-white.png";
import logoColored from "/logo-colored.png";
import "../Navbar/Navbar.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Solutions", "Contact"];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [scroll, setScroll] = useState(false);

	const scrolling = () => {
		window.scrollY >= 2 ? setScroll(true) : setScroll(false);
	};
	window.addEventListener("scroll", scrolling);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
		// if (isMouseEnter) setIsMouseEnter(false);
	};

	const drawer = (
		<Box
			sx={{
				textAlign: "center",
				zIndex: "20",
			}}
			id="sidebar">
			<Typography variant="h6" sx={{ my: 2 }}>
				<img src={logoColored} alt=""
					style={{
						height: "4rem",
						marginTop: "1.5rem",
					}}
				/>
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem key={index} disablePadding>
						<div
							style={{
								padding: "10px",
								margin: "auto",
							}}>
							<a
								href={`#${item.toLowerCase()}`}
								className="navbarLinks otherLinks"
								onClick={handleDrawerToggle}
								style={{ color: "black" }}>
								{item}
							</a>
						</div>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					component="nav"
					sx={{
						zIndex: 10,
						boxShadow: "none",
						background: scroll ? "black" : "transparent",
						position: "fixed",
						top: 0,
					}}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { sm: "none" },
								color: "white"
							}}>
							<MenuIcon />
						</IconButton>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent:'space-around'
							}}>
							<Typography
								variant="h6"
								component="div"
								sx={{
									display: { xs: "none", sm: "block" },
									ml: { sm: 0, md: 4 },
									marginLeft:'14rem',
									marginRight:'1rem',
								}}
								className="navbarTitle">
								<a href="#home">
									<img
										src={logoWhite}
										alt=""
										style={{
											height: "2rem",
											transform:'scale(1.8)',
											marginTop: "0.5rem",
										}}
										id="navbarLogo"
									/>
								</a>
							</Typography>
							<Box
								xs={6}
								sx={{
									display: { xs: "none", sm: "block" },
									width: { sm: "70%", md: "50%" },
								}}>
								<Box
									sx={{
										width: "85%",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
									}}>
									{navItems.map((item, index) => (
										<div
											key={index}
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<a
												href={`#${item.toLowerCase()}`}
												className="navbarLinks"
											>
												{item}
											</a>
										</div>
									))}
								</Box>
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						// onClick={handleSidebarClick}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</>
	);
}
