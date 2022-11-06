import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from './App';

function AppHeader() {
    const appContext = useContext(AppContext);

    return (
        <Box sx={{ width: '100%' }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={appContext.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Typography variant="h1" gutterBottom>
                Notino React App
            </Typography>
            <Typography variant="body1" gutterBottom>
                This app firstly loads data from public TODO API, then it shows to the user. While loading, it displays loading icon.
            </Typography>
        </Box >

    );
}

export default AppHeader;