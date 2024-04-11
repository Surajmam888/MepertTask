import React, { useState, useEffect } from 'react';
import { Grid, Button, Box,Container,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import StoryCard from './StoryCard';

function StoriesList() {
    const [stories, setStories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchStoriesData() {
            try {
                const response = await fetch('https://child.onrender.com/api/sciencefiction');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error('Error fetching stories data:', error);
            }
        }
        fetchStoriesData();
    }, []);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box sx={{backgroundColor:"#0E0421",padding:"10px"}}>
            <Container>
            <Grid container spacing={2} justifyContent="center">
                {stories.map((story, index) => (
                    <Grid item key={story._id} xs={12} sm={6} md={4} lg={3}>
                        <Link to={`/story/${story._id}`} style={{ textDecoration: 'none' }}>
                            <StoryCard
                                title={story.Title}
                                image={story.Image[0]}
                                status={story.Status}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Grid container sx={{ marginTop: '20px' }}>
                <Grid item xs={6} textAlign="left">
                    <Link to="/storieslist"><Button onClick={goToPrevious} variant="outlined" sx={{ borderRadius: "20px", marginRight: '10px' }}>Previous</Button></Link>
                </Grid>
                <Grid item xs={6} textAlign="right">
                    <Link to="/tabbedinterface"><Button onClick={goToNext} variant="outlined" sx={{ borderRadius: "20px" }}>Next</Button></Link>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
}

export default StoriesList;

