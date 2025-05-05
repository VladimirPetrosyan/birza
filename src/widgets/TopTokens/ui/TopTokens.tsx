// widgets/TopTokens/ui/TopTokens.tsx
import { Box, Typography } from '@mui/material';
import { TokenCard } from '@/entities/Token/ui/TokenCard';
import XRP from '@/shared/assets/icons/Shibo.svg?react';
import DOT from '@/shared/assets/icons/DOT.svg?react';
import TRX from '@/shared/assets/icons/TRX.svg?react';

export const TopTokens = () => {
    return (
        <Box px={2} py={2}
             sx={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                 borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                 borderTopLeftRadius: 0,
                 borderTopRightRadius: 0,
                 borderBottomLeftRadius: 24,
                 borderBottomRightRadius: 24,
                 boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                 backdropFilter: 'blur(32px)',
                 width: '100%',
                 textAlign:'center'
             }}
        >
            <Typography variant="caption" sx={{ color: '#888', textAlign: 'center' }}>
                ТОП ВАЛЮТ
            </Typography>

            <TokenCard
                icon={XRP}
                name="Ripple"
                ticker="XRP"
                amount="200489"
                price="₽32.2541"
                trend="up"
                chartData={[1, 2, 3, 2, 4, 5, 3]}
            />
            <TokenCard
                icon={XRP}
                name="Ripple"
                ticker="XRP"
                amount="200489"
                price="₽32.2541"
                trend="up"
                chartData={[1, 2, 3, 2, 4, 5, 3]}
            />
            <TokenCard
                icon={XRP}
                name="Ripple"
                ticker="XRP"
                amount="200489"
                price="₽32.2541"
                trend="up"
                chartData={[1, 2, 3, 2, 4, 5, 3]}
            />
            <TokenCard
                icon={XRP}
                name="Ripple"
                ticker="XRP"
                amount="200489"
                price="₽32.2541"
                trend="up"
                chartData={[1, 2, 3, 2, 4, 5, 3]}
            />
            <TokenCard
                icon={DOT}
                name="Polkadot"
                ticker="DOT"
                amount="150000"
                price="₽28.12"
                trend="down"
                chartData={[5, 4, 3, 2, 1, 2, 1]}
            />
            <TokenCard
                icon={TRX}
                name="Tron"
                ticker="TRX"
                amount="300000"
                price="₽12.87"
                trend="up"
                chartData={[1, 2, 1, 3, 4, 3, 5]}
            />
        </Box>
    );
};
