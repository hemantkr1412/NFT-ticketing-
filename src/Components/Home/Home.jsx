import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./Home.css";

const Home = () => {
	return (
		<div
			className='homeContainer'
			style={{
				height: "100vh",
			}}
		>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					height: { xs: "70vh", sm: "100vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
				}}
				id="homeContainer">
				<Grid item md={1}></Grid>
				<Grid item sm={12} md={9} lg={6} sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					p: 2,
					color: 'white',
					textAlign:{xs:'center',md:'unset'}
				}}>
					<Typography variant="h2" gutterBottom sx={{
						fontSize: {
							xs: '2rem',
							sm: '3rem',
						}
					}}>
						Fan Engagement and
						Gamification through
						NFT Ticketing & Collectibles

					</Typography>
					<Typography variant="h6" gutterBottom>
						Tap into your audience's needs and create new economic,emotional, and loyalty value
					</Typography>
				</Grid>
			</Grid>
		</div >
	);
};

export default Home;
