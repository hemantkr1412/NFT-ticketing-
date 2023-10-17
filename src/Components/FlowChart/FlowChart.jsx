import { Grid, Typography } from "@mui/material"
import { flowchartData } from './FlowchartData';
import './Flowchart.css';

const FlowChart = () => {
	return (
		<div>
			<Typography variant="h4" gutterBottom sx={{
				textAlign: 'center',
				fontWeight: 'bold',
				marginBottom: "3rem",
				marginTop: "5rem",
				color: '#3E6C90'
			}}>
				How NFT Ticketing Works
			</Typography>
			<Grid
				container
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					flexWrap:'wrap',
					color: '#3E6C90'
				}}>
				{
					flowchartData.map((elem, ind) => {
						return (
							<>
								<Grid item xs={5} sm={4} md={3} lg={2} key={ind} sx={{
									textAlign: "center",
									marginBottom: '2rem'
								}}>
									<Typography variant="body1" gutterBottom>
										{elem.title}
									</Typography>

									<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
										{elem.body}
									</Typography>

									<img src={elem.img} alt="" className="mobileScreen" />

									<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
										{elem.subtitle}
									</Typography>

									<Typography variant="span" gutterBottom>
										{elem.desc}
									</Typography>
								</Grid>
							</>
						)
					})
				}
			</Grid>
		</div>
	)
}

export default FlowChart