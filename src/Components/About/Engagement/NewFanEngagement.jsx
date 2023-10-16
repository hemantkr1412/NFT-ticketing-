import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import frame from '../assets/newframe1.png';
import frame2 from '../assets/NewFrame2.png';
import frame3 from '../assets/NewFrame3.png';
import "../About.css";
import './Engagement.css';

const data = [
    {img: frame, title: 'ECONOMIC VALUE', body: 'NFT COLLECTIBLES'},
    {img: frame2, title: 'EMOTIONAL VALUE', body: 'MEMORABILIA TICKETS'},
    {img: frame3, title: 'LOYALTY VALUE', body: 'PERSONAL FAN ACHIEVEMENTS'},
];

const NewFanEngagement = () => {
    return (
        <>
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
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: '#3E6C90'
                }}>
                {
                    data.map((elem, ind) => {
                        return (
                            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }} ky={ind}>
                                <img src={elem.img} alt="" className='mobileScreen' />
                                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {elem.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {elem.body}
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default NewFanEngagement;