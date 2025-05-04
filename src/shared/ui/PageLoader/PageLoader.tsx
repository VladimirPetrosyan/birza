// shared/ui/PageLoader/PageLoader.tsx
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export const PageLoader = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="black"
        >
            <CircularProgress color="success" />
        </Box>
    );
};
