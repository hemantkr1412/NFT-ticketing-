import React from "react";
import AboutCard from "./AboutCard";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { aboutCardData } from './aboutCardData'
import Typography from '@mui/material/Typography';
import image1 from './assets/abc2.png'
import ss from './assets/ss.webp'
import ss2 from './assets/ss2.webp'
import frame from './assets/frame3.png'
import "./About.css";

const About = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1 style={{ width: '50%', textAlign: 'center' }}>Revolutionise your ticketing with NFTs
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

			{/* Increase Fan Engagement */}

			<Grid container sx={{ height: '50rem', mt: 5, backgroundColor: '#3E6C90', p: 2 }}>
				<Grid item xs={7} sx={{
					background: 'white',
					borderTopLeftRadius:'1rem',
					borderBottomLeftRadius:'1rem'
				}}>
					<Typography variant="h3" gutterBottom sx={{
						textAlign: 'center',
						fontWeight: 'bold',
						marginBottom: "10rem",
						marginTop: "1rem",
						color: '#3E6C90'
					}}>
						Increase
						Fan Engagement
					</Typography>
					<div className="fanEngagementLeftDiv">
						<div className="fanEngagementBoxes" style={{ marginTop: '2rem' }}>
							<div className="fanEngagementIconBoxes box1">
								<img src={image1} alt="" />
							</div>
							<p className="fanEngagementBoxTitle">Memorabilia</p>
							<p style={{ textAlign: 'center' }}>Keep memories of the events
								you attended with digital ticket
								stubs.</p>
						</div>
						<div className="fanEngagementBoxes">
							<div className="fanEngagementIconBoxes box2">
								<img src={image1} alt="" />
							</div>
							<p className="fanEngagementBoxTitle">Proof of Attendance</p>
							<p style={{ textAlign: 'center' }}>Collect fan loyalty and unlock
								additional benefits with your
								achievements.</p>
						</div>
					</div>
					<div className="fanEngagementLeftDiv" style={{
						justifyContent: 'flex-end',
						gap: '3rem',
					}}>
						<div className="fanEngagementBoxes" style={{ marginTop: '2rem' }}>
							<div className="fanEngagementIconBoxes box3">
								<img src={image1} alt="" />
							</div>
							<p className="fanEngagementBoxTitle">Unique Asset</p>
							<p style={{ textAlign: 'center' }}>Collect and trade valuable NFT
								artwork, epic moments, and
								fan media.</p>
						</div>
						<div className="fanEngagementBoxes" style={{ marginRight: '5rem' }}>
							<div className="fanEngagementIconBoxes box4">
								<img src={image1} alt="" />
							</div>
							<p className="fanEngagementBoxTitle">Fan Achievements</p>
							<p style={{ textAlign: 'center' }}>Share your personal fan
								achievements on (social
								media) profile pictures.</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={5} sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1rem'
				}}>
					<div className="screenshotContainer" style={{ marginTop: '5rem' }}>
						<img src={ss} alt="" style={{
						}} />
					</div>
					<div className="screenshotContainer">
						<img src={ss2} alt="" style={{
						}} />
					</div>
				</Grid>
			</Grid>

			{/* Unleashing new fan Engagement */}

			<Typography variant="h4" gutterBottom sx={{
				textAlign: 'center',
				fontWeight: 'bold',
				marginBottom: "3rem",
				marginTop: "5rem",
				color: '#3E6C90'
			}}>
				Unleasing new fan engagement and gamification possibilities
			</Typography>

			<Grid
				container
				// spacing={{ xs: 1, sm: 3 }}
				sx={{
					display: "flex",
					alignItems: 'center',
					justifyContent: "space-evenly",
					// textTransform:'capitalize'
				}}
				justifyContent="center">
				<Grid item sx={{
					border: '2px solid red',
					textAlign: "center"
				}}>
					<img src={frame} alt="" style={{
						border: '1px solid',
						height: '30rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
						ECONOMIC VALUE
					</Typography>
					<Typography variant="body1" gutterBottom>
						NFT COLLECTIBLES
					</Typography>
				</Grid>
				<Grid item sx={{
					border: '2px solid red',
					textAlign: "center"
				}}>
					<img src={frame} alt="" style={{
						border: '1px solid',
						height: '30rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
						EMOTIONAL VALUE
					</Typography>
					<Typography variant="body1" gutterBottom>
						MEMORABILIA TICKETS
					</Typography>
				</Grid>
				<Grid item sx={{
					border: '2px solid red',
					textAlign: "center"
				}}>
					<img src={frame} alt="" style={{
						border: '1px solid',
						height: '30rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
						LOYALTY VALUE
					</Typography>
					<Typography variant="body1" gutterBottom>
						PERSONAL FAN ACHIEVEMENTS
					</Typography>
				</Grid>
			</Grid>

		</div >
	);
};

export default About;
