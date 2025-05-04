// widgets/UserTokens/ui/UserTokens.tsx
import { Box, Divider, Typography } from '@mui/material';
import { TokenCard } from '@/entities/Token/ui/TokenCard';
import XRP from '@/shared/assets/icons/Shibo.svg?react';


export const UserTokens = () => {
    return (
        <Box px={2}
        sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius:4,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(32px)',
            width: '100%',
        }}>

            {/* Мои монеты */}
            <Typography variant="caption" sx={{ color: '#888', padding: '24 0 16 0', textAlign: 'center'}}>
                МОИ МОНЕТЫ
            </Typography>
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="down" />
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="up" />
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="up" />


        </Box>
    );
};
