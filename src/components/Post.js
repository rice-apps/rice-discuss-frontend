import React from 'react';
import {Box, Grid, Stack} from 'grommet';

function Post (props) {
    return (
        <Grid 
            rows = {["small"]}
            columns = {["xsmall", "xsmall", "small"]}
            gap="xsmall"
            areas={[
                { name: 'poster', start: [0, 0], end: [1, 0] },
                { name: 'bar', start: [1, 0], end: [1, 0] },
                { name: 'postInfo', start: [2, 0], end: [2, 0] },
                ]}
            className="posts"
        >

            <Stack gridArea="poster">
                <h1>{props.author}</h1>
            </Stack>
            <Box gridArea="bar"/>
            <Stack gridArea="postInfo">
                {props.body}
            </Stack>
            
        </Grid>
    )
}

export default Post;