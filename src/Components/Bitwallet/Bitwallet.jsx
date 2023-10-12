import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bitwallet from '/bitwallet.jpg'
import playstore from '/ankit.png';
import './Bitwallet.css';

const Bitwallet = () => {
    return (
        <>
            <div id="solutions"></div>
            <Grid container spacing={2} sx={{ mt: 5, mb: 5 }}>
                <Grid item xs={2} sx={{ display: { xs: "none", lg: "block" } }}></Grid>

                <Grid item xs={3}>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1rem'

                    }}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                display: { xs: "none", md: "block" },
                            }}>
                            BIT WALLET
                        </Typography>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                display: { xs: "none", md: "block" },
                            }}>
                            One wallet to
                            rule them all
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{
                                display: { xs: "none", md: "block" },
                            }}>
                            Our wallet app is an all-in-one solution to securely store NFT Tickets and legacy pkpass event tickets, flight tickets, membership cards, digital health data, NFT collectibles, and many more.
                        </Typography>
                        <a
                            href="https://play.google.com/store/apps/details?id=beimagine.tech"
                            target="_blank"
                        >
                            <img
                                src={playstore}
                                alt="Get it on Google Play"
                                style={{
                                    width: '30%',
                                    marginTop: '1.5rem'
                                }}
                            />
                        </a>
                    </Box>
                </Grid>

                <Grid item xs={5} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem'
                }}>
                    <div className="screenshotContainer" style={{ marginTop: '2rem' }}>
                        <img src={bitwallet} alt="" style={{
                        }} />
                    </div>
                    <div className="screenshotContainer">
                        <img src={bitwallet} alt="" style={{
                        }} />
                    </div>
                </Grid>

                <Grid item xs={2} sx={{ display: { xs: "none", lg: "block" } }}></Grid>
            </Grid>
        </>
    )
}

export default Bitwallet