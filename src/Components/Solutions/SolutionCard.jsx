import React from 'react';
import Typography from '@mui/material/Typography';
import "../About/About.css";
import "./Solutions.css";

export default function SolutionCard(props) {
    return (
        <div style={{
            maxWidth: '100%',
            height: '100%',
            textAlign: 'center',
            margin: 'auto'
        }}
            className="solutionCard"
        >
            <div className='flip-card'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="imgDiv">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium' }} className="aboutCardTitle">
                            {props.title}
                        </Typography>
                        <Typography
                            sx={{ mt: 2 }}
                            variant="body1" color="text.secondary">
                            {props.desc}
                        </Typography>
                    </div>
                </div>
            </div>
        </div >
    );
}