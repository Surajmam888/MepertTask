import React from 'react';
import Header from './Header';
import { Grid, Button, Box, Typography } from '@mui/material';
import banner from "../assets/banner.png";

const Nav = () => {
    return (
        <Box sx={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', minHeight: '50vh' }}>
            <Header />
            <Grid sx={{ padding: "50px" }}>
                <Typography variant='h4' sx={{ color: "white", textAlign: "center", fontWeight: "600" }}>Science Fiction Stories</Typography>
                <Box sx={{ textAlign: "center", paddingTop: "20px" }}>
                    <Button sx={{ backgroundColor: "#1C84FF", color: "white", borderRadius: "25px", padding: "15px" }}>New</Button>
                    <Button sx={{ backgroundColor: "#FFBF1A", color: "white", borderRadius: "25px", padding: "15px", marginLeft: "20px" }}>In Progress</Button>
                    <Button sx={{ backgroundColor: "#1AFF5A", color: "white", borderRadius: "25px", padding: "15px", marginLeft: "20px" }}>Completed</Button>
                    <Button sx={{ backgroundColor: "#1C84FF", color: "white", borderRadius: "25px", padding: "15px", marginLeft: "20px" }}>Clear All</Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Nav;
