import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const StoryCard = ({ title, image, status }) => {
    let textColor;
    switch (status) {
        case 'New':
            textColor = 'blue';
            break;
        case 'In Progress':
            textColor = 'orange';
            break;
        case 'Completed':
            textColor = 'green';
            break;
        default:
            textColor = 'black';
    }

    return (
        <Card sx={{ padding: "10px", color: "white", background: "#5241C6", borderRadius: "12px" }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                // onError={(e) => {
                //     e.target.onerror = null; 
                //     e.target.src = 'https://ik.imagekit.io/dev24/${data?.Image}';
                // }}
            />
            <CardContent>
                <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px", fontWeight: 300 }}>
                    {title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    <Button
                        variant='outlined'
                        sx={{
                            borderRadius: "20px",
                            width: "100%",
                            color: textColor,
                            backgroundColor: "white",
                            fontWeight: 600
                        }}
                    >
                        {status}
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StoryCard;


