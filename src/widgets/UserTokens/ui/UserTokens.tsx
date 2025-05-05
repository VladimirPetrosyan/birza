// widgets/UserTokens/ui/UserTokens.tsx
import { Box, Typography } from '@mui/material';
import { TokenCard } from '@/entities/Token/ui/TokenCard';
import XRP from '@/shared/assets/icons/Shibo.svg?react';


export const UserTokens = () => {
    return (
        <Box px={2} py={2}
        sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(32px)',
            width: '100%',
            textAlign:'center'
        }}>

            {/* Мои монеты */}
            <Typography variant="caption" sx={{ color: '#888', padding: '24 0 16 0', textAlign: 'center'}}>
                МОИ МОНЕТЫ
            </Typography>
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="down" chartData={[32, 33, 34, 35, 34.5, 35.1, 36]} />
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="up"  chartData={[32, 33, 34, 35, 34.5, 35.1, 36]}/>
            <TokenCard icon={XRP} name="Ripple" ticker="XRP" amount="200489" price="₽32.2541" trend="up"  chartData={[32, 33, 34, 35, 34.5, 35.1, 36]}/>
        </Box>
    );
};
