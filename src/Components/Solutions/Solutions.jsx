import React from "react";
import SolutionCard from "./SolutionCard";
import Grid from "@mui/material/Grid";
import { solutionCardData } from './solutionCardData'
import Typography from '@mui/material/Typography';
import "../About/About.css";
import "./Solutions.css";

const Solutions = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
        <div id="solutions"></div>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1 style={{width:'50%',textAlign:'center'}}>We deliver</h1>
				<Typography variant="body1" gutterBottom sx={{
					marginBottom: "3rem",
					marginTop: "1rem",
					padding:'0 1rem'
				}}>
					NFT Ticketing-as-a-Service for easy integration in existing ticketing and event management solutions
				</Typography>
				<Grid
					container
					spacing={{ xs: 1, sm: 3 }}
					justifyContent="center">
					<Grid item xs={1}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
					<Grid item container xs={12} sm={12} lg={10} spacing={3}
						className="aboutCardContainerDiv">
						{
							solutionCardData.map((data, id) => {
								return (
									<>
										<Grid item xs={6} sm={4} md={3} spacing={3}
											key={id}
											className="solutionCardsDiv">
											<SolutionCard
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
					<Grid item xs={1}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Solutions;
