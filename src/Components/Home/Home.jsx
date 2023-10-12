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
				<Grid item xs={6} sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					p: 2,
					color: 'white'
				}}>
					<Typography variant="h2" gutterBottom>
						NFT Ticketing & Collectibles for live events
					</Typography>
					<Typography variant="h6" gutterBottom>
						Our self-service platform enables each event organizer to manage the ticketing lifecycle at any time on its own
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
