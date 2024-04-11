import React from 'react';
import { Tabs, Tab, Typography, Box, Grid, Button } from '@mui/material';
import StoriesList from './StoriesList';
import Page1 from "../assets/Page1.png";
import Page2 from "../assets/Page2.png";

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function TabbedInterface({ stories }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs">
                <Tab label="Design page-1" />
                <Tab label="Design page-2" />
                <Tab label="Design page-3" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <StoriesList stories={stories} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* <StoriesList stories={stories} /> */}
                <img src={Page1} alt="" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* <StoriesList stories={stories} /> */}
                <img src={Page2} alt="" />
            </TabPanel>
        </div>
    );
}

export default TabbedInterface;
