import React from 'react';
import {Grid, Box, Text} from 'grommet';
import {ImageStamp} from 'grommet-controls';
import {calendar} from './assets/calendar.jpg';
//import Post from './Post';
import './empty.css'

console.log(calendar);

function searchbar(){
    return(
        <div style = {{backgroundColor: '#F9FAFB'}}>
            <Grid           
            rows={['xxsmall']}
            columns={['small', 'xlarge', 'medium']}
            areas={[
            { name: 'space', start: [0, 0], end: [0, 0] },
            { name: 'searchbar', start: [1, 0], end: [1, 0] },
            { name: 'icon', start: [2, 0], end: [2, 0] },
            ]}
        >
            <Box gridArea='space1'>
            </Box>
            <Box gridArea='searchbar'>
                    <Text>Search Bar Here</Text>
            </Box >
            <Box gridArea='icon' align = 'center'>
                <Text>Icons Here</Text> 
                <ImageStamp
                    src = {calendar}
                />
            </Box>

        </Grid>

        </div>
    )
}

export default searchbar;