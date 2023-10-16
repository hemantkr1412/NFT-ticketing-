import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import './About.css';

const iconsStyle = {
    margin: '1rem',
    transform: 'scale(1.5)'
}

export default function MissionCard(props) {
    return (
        <Card sx={{
            // border:'2px solid blue',
            maxWidth: '100%',
            height: '100%',
            textAlign: 'center',
            boxShadow: '1px 0.2px 12px #afafaf',
            borderRadius: '6px',
            margin: 'auto'
        }}
            className="aboutCard"
        >

            <CardContent className='cardContent'>
                {props.id === 1 && <MonetizationOnIcon style={iconsStyle} />}
                {props.id === 2 && <GppGoodIcon style={iconsStyle} />}
                {props.id === 3 && <AutoGraphIcon style={iconsStyle} />}
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium' }} className="aboutCardTitle">
                    {props.title}
                </Typography>
                <Typography
                    sx={{ mt: 2 }}
                    variant="body1" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card >
    );
}