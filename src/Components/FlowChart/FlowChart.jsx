import { Box, Grid, Typography } from "@mui/material"
import Frame1 from './assets/Frame1.png';
import Frame2 from './assets/NewFrame2.svg';
import Frame3 from './assets/NewFrame3.svg';
import Frame4 from './assets/NewFrame4.svg';
import Frame5 from './assets/NewFrame5.svg';


const FlowChart = () =>{




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
				// spacing={{ xs: 1, sm: 3 }}
				sx={{
					display: "flex",
					alignItems: 'center',
					justifyContent: "space-evenly",
					// textTransform:'capitalize'
					color: '#3E6C90'
				}}
				justifyContent="center">
				<Grid item sx={{
					// border: '2px solid red',
					textAlign: "center",
                    marginBottom: '2rem'

				}}>

                    <Typography variant="body1" gutterBottom>
                        TICKET PURCHASE
					</Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
						NFT Ticket
					</Typography>
	
					<img src={Frame1} alt="" style={{
						// border: '1px solid',
						height: '35rem',
						marginBottom: '2rem'
					}} />
					
                  
					
                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Tamper-proof ticket
                        </Typography>
                        <Typography  variant="body1" gutterBottom>
                            Sell or transfer tickets on <br/>
                            secure and fair secondary 
                            market​.
                        </Typography>
				</Grid>
				<Grid item sx={{
					// border: '2px solid red',
					textAlign: "center",
                    marginBottom: '2rem'
				}}>
                    <Typography variant="body1" gutterBottom>
                        TICKET ACTIVATION
					</Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Ticket Stub NFT
					</Typography>
					<img src={Frame2} alt="" style={{
						// border: '1px solid',
						height: '35rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
						Memorabilia ticket
					</Typography>
					<Typography variant="body1" gutterBottom>
						Keep memories of the <br/>
                        events you attended​ with 
                        digital ticket stubs.
					</Typography>
				</Grid>
                <Grid item sx={{
					// border: '2px solid red',
					textAlign: "center",
                    marginBottom: '2rem'
				}}>
                    <Typography variant="body1" gutterBottom>
                    COLLECTING ARTWORK
					</Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Collectibles NFT
					</Typography>
                    
					<img src={Frame3} alt="" style={{
						// border: '1px solid',
						height: '35rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Unique asset
					</Typography>
					<Typography variant="body1" gutterBottom>
                    Collect and trade valuable <br/>
                    NFT artwork, epic 
                    moments, and fan media
					</Typography>
				</Grid>
				<Grid item sx={{
					// border: '2px solid red',
					textAlign: "center",
                    marginBottom: '2rem'
				}}>

                    <Typography variant="body1" gutterBottom>
                        EARNING ACHIEVEMENTS
                    </Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        POA NF
                    </Typography>
                   
					<img src={Frame4} alt="" style={{
						// border: '1px solid',
						height: '35rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Proof of Attendance
					</Typography>
					<Typography variant="body1" gutterBottom>
                        Collect fan loyalty and <br/>
                        unlock additional benefits 
                        with your achievements
					</Typography>
				</Grid>
                <Grid item sx={{
					// border: '2px solid red',
					textAlign: "center",
                    marginBottom: '2rem'
				}}>

                    <Typography variant="body1" gutterBottom>
                        SHARING EXPERIENCES
                    </Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                     PFP NFT
                    </Typography>
					<img src={Frame5} alt="" style={{
						// border: '1px solid',
						height: '35rem',
						marginBottom: '2rem'
					}} />
					<Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Profile Picture
					</Typography>
					<Typography variant="body1" gutterBottom>
                    Share your personal fan <br/>
                    achievements on (social 
                    media) profile pictures​.

					</Typography>
				</Grid>

			</Grid>
        </div>
    )
}

export default FlowChart