import React from 'react';
import {Grid, Stack, Box} from 'grommet';
import Sidebar from './sidebar';
//import TopHit from './TopHits';
//import Uploads from './Uploads';

function Layout (){
    return (
        <div style = {{backgroundColor:'brand'}}>
            <Grid           
                rows={['xxsmall', ['large', 'flex']]}
                //rows={['1/2', '2/3']}
                columns={[['xsmall','flex'], ['xlarge','flex'], ['medium', 'flex']]}
                background = "Brand"
                gap = 'medium'
                fill = {true}
                areas={[
                { name: 'header', start: [0, 0], end: [2, 1] },
                { name: 'left', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
                { name: 'right', start: [2, 1], end: [2, 1] },
                ]}
            >
                <Box gridArea="header" background="brand" />
                <Box gridArea="left" background="light-5" />
                <Box gridArea="main" background="light-2" />
                <Stack gridArea="right" background="light-5" fill = {true}>
                    <Box as={Sidebar} />
                </Stack>
            </Grid>
        </div>

    );
}

export default Layout;