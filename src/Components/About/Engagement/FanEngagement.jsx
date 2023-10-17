import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import image1 from '../assets/abc2.png'
import ss from '../assets/ss.webp'
import ss2 from '../assets/ss2.webp'

const FanEngagement = () => {
    return (
        <Grid container sx={{ p: 2 }} className="fanEngagementContainer">
            <Grid item xs={12} md={6} lg={7} className="fanEngagementLeftContainer">
                <Typography variant="h3" gutterBottom sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: {xs:0,md:'10rem'},
                    marginTop: "1rem",
                    color: '#3E6C90'
                }} className="fanEngagementHead">
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
                    <div className="fanEngagementBoxes lastBox" style={{ marginRight: '5rem' }}>
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
            <Grid item xs={12} md={6} lg={5} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }} className="screenshotOuterContainer">
                <Grid item xs={3} md={5} className="screenshotContainer" style={{ marginTop: '5rem' }}>
                    <img src={ss} alt="" />
                </Grid>
                <Grid item xs={3} md={5} className="screenshotContainer">
                    <img src={ss2} alt="" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FanEngagement;