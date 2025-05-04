// widgets/UserGreeting/ui/Greeting.tsx
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SyncIcon from '@mui/icons-material/Sync';

export const UserGreeting = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            pt={3}
        >
            {/* Левая часть: Аватар + текст */}
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                    sx={{
                        bgcolor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        width: 48,
                        height: 48,
                        color: '#7FE860',
                    }}
                >
                    <PersonIcon />
                </Avatar>
                <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        Здравствуйте!
                    </Typography>
                    <Typography color="rgba(255, 255, 255, 1)" fontWeight={600} zIndex={22}>
                        Иван Иванов
                    </Typography>
                </Box>
            </Box>

            {/* Правая часть: иконка */}
            <IconButton
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: 40,
                    height: 40,
                    color: 'white',
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        cursor: 'not-allowed',
                    },
                }}
            >
                <SyncIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};

