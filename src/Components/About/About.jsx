import React from "react";
import AboutCard from "./AboutCard";
import FanEngagement from "./Engagement/FanEngagement";
import NewFanEngagement from "./Engagement/NewFanEngagement";
import Grid from "@mui/material/Grid";
import { aboutCardData } from './aboutCardData'
import Typography from '@mui/material/Typography';
import "./About.css";

const About = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1 style={{ textAlign: 'center' }}>Revolutionise your ticketing with NFTs</h1>
				<Typography variant="body1" gutterBottom sx={{
					marginBottom: "3rem",
					marginTop: "1rem",
					padding: '0 1rem'
				}}>
					By using blockchain technology and NFTs, we are now at the forefront of a new era of event ticketing
				</Typography>
				<Grid
					container
					spacing={{ xs: 1, sm: 3 }}
					justifyContent="center"
					sx={{ marginLeft: 0, padding: '1rem' }}
				>
					<Grid item xs={2} md={1}
						sx={{ display: { xs: "none", md: "block" } }}>
					</Grid>
					<Grid item container xs={12} md={10} lg={8} spacing={3}
						className="aboutCardContainerDiv">
						{
							aboutCardData.map((data, id) => {
								return (
									<>
										<Grid item xs={10} sm={4} spacing={3}
											key={id}
											className="cardsDiv">
											<AboutCard
												key={id}
												id={data.id}
												title={data.title}
												desc={data.desc}
												img={data.img}
											/>
										</Grid>
									</>
								);
							})
						}
					</Grid>
					<Grid item xs={2} md={1}
						sx={{ display: { xs: "none", md: "block" } }}>
					</Grid>
				</Grid>
			</div>

			{/* Increase Fan Engagement */}

			<FanEngagement/>

			{/* Unleashing new fan Engagement */}

			<NewFanEngagement />
		</div >
	);
};

export default About;
