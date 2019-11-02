import React from 'react';
import {Grid, Box, Stack, Text} from 'grommet';
import Post from './Post';
import './empty.css'
import TopHits from './TopHits';
import Uploads from './Uploads'


// function TopHits () {

//     const posts = [<Post author="david yi" body="hello"/>,
//     <Post author="victor" body="what a cool kid"/>
// ];
//     return (
//         <div className="tophits">
//             <h1>Top Hits</h1>
//             {posts}
//         </div>
//     )
// }

// function UpcomingEvents() {

//     const posts = [<Post author="david yi" body="hola"/>,
//     <Post author="victor" body="is a kid"/>
// ];
//     return (
//         <div className="upcomingevents">
//             <h1>Upcoming Events</h1>
//             {posts}
//         </div>
//     )
// }

function sidebar(){
    
    return(
        
        <div>
            <Grid           
            rows={['xxsmall', 'small', 'xxsmall', 'medium']}
            columns={['medium']}
            gap="medium"
            areas={[
            { name: 'top_post_header', start: [0, 0], end: [0, 0] },
            { name: 'top_post_body', start: [0, 1], end: [0, 1] },
            { name: 'upcoming_event_header', start: [0, 2], end: [0, 2] },
            { name: 'upcoming_event_body', start: [0, 3], end: [0, 3] },
            ]}
        >
            <Box gridArea="top_post_header" background="brand">
                <Text textAlign="start" color="#839CBE" font="Medium Helvetica Neue" size="large" opacity="1">Trending</Text>
            </Box>
            <Stack gridArea="top_post_body" background="light-3" >
                <Box as={TopHits}/>
            </Stack>
            <Box gridArea="upcoming_event_header" background="accent-2">
                <Text textAlign="start" color="#839CBE" font="Medium Helvetica Neue" size="large" opacity="1">Upcoming Events</Text>
            </Box>
            <Stack gridArea="upcoming_event_body" background="accent-1" fill = {true}>
                <Box as={Uploads}/>
            </Stack>
            </Grid>

        </div>

    )
}


export default sidebar;