import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
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
				<Grid item xs={1}></Grid>
				<Grid item xs={12} sm={8} md={6} sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					p: 2,
					color: 'white'
				}}>
					<Typography variant="h2" gutterBottom>
						Fan Engagement and
						Gamification through
						NFT Ticketing & Collectibles

					</Typography>
					<Typography variant="h6" gutterBottom>
						Tap into your audience's needs and create new economic,emotional, and loyalty value
					</Typography>
					{/* <Button variant="contained" className="homeBtn"
						sx={{
							border: '2px solid var(--primary)',
							background: 'var(--primary)',
							width: '10rem',
							margin: 'auto',
							marginTop: '2rem'
						}}>Know more
					</Button> */}
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
