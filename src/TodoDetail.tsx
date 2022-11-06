import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './App';

const TodoDetail = () => {
    const appContext = useContext(AppContext);
    let { id } = useParams();
    let todoItem = appContext.todos.find(it => it.id == id);

    return (
        <Box sx={{ width: '95%' }}>
            <Typography variant="h2" gutterBottom>
                TODO Detail page:
            </Typography>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={4}>
                    ID
                </Grid>
                <Grid item xs={12}>
                    {id}
                </Grid>
                <Grid item xs={4}>
                    UserID
                </Grid>
                <Grid item xs={12}>
                    {todoItem?.userId}
                </Grid>
                <Grid item xs={4}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    {todoItem?.title}
                </Grid>
            </Grid>
        </Box>
    );
}

export default TodoDetail;