import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTokenSwitcher } from '../model/useTokenSwitcher';

export const TokenSwitcher = () => {
    const { selectedToken } = useTokenSwitcher();
    const { icon: Icon, symbol, name } = selectedToken;

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            paddingTop={'36px'}
            zIndex={2}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{ bgcolor: 'black', width: 48, height: 48 }}>
                    <Icon />
                </Avatar>

                <Box>
                    <Typography variant="subtitle1" color="white">
                        {symbol}
                    </Typography>
                    <Typography variant="caption" color="gray">
                        {name}
                    </Typography>
                </Box>
            </Box>

            <IconButton
                disabled
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: 40,
                    height: 40,
                    color: 'white',

                    // Стили для disabled-состояния
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        cursor: 'not-allowed',
                    },
                }}
            >
                <KeyboardArrowDownIcon />
            </IconButton>

        </Box>
    );
};
