import React from "react";
import AboutCard from "./AboutCard";
import Grid from "@mui/material/Grid";
import { aboutCardData } from './aboutCardData'
import Typography from '@mui/material/Typography';
import "./About.css";

const About = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1 style={{width:'50%',textAlign:'center'}}>Revolutionise your ticketing with NFTs
					- Sell on NFT Ticketing Today!</h1>
				<Typography variant="body1" gutterBottom sx={{
					marginBottom: "3rem",
					marginTop: "1rem",
				}}>
					By using blockchain technology and NFTs, we are now at the forefront of a new era of event ticketing
				</Typography>
				<Grid
					container
					spacing={{ xs: 1, sm: 3 }}
					justifyContent="center">
					<Grid item xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
					<Grid item container xs={12} lg={8} spacing={3}
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
					<Grid item xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default About;
