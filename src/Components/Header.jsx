import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton,Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import Logo from './logo.svg';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', paddingTop:"20px" }}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={Logo} alt="Company Logo" style={{ width: '50px', height: 'auto' }} />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '10px', color: 'white' }}>
          BrainLingo
        </Typography>
        <Box sx={{alignItems:"center"}}>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">Leaderboard</Button>
        <Button color="inherit" component={Link} to="/about">Daily Quiz</Button>
        <Button color="inherit" component={Link} to="/about">Genre</Button></Box>
        <Button color="inherit" sx={{borderRadius:"25px", backgroundColor:"#1C84FF",padding:"15px"}}>Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
};


export default Header;
