import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    name: string;
    ticker: string;
    amount: string;
    price: string;
    trend: 'up' | 'down';
};

export const TokenCard = ({ icon: Icon, name, ticker, amount, price, trend }: Props) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py={1}
            sx={{ borderBottom: '1px solid #333' }}
        >
            <Box display="flex" alignItems="center" gap={1.5}>
                <Icon width={36} height={36} style={{ borderRadius: '50%' }} />
                <Box>
                    <Typography color="white">{ticker}</Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>{amount} шт.</Typography>
                </Box>
            </Box>

            <Box textAlign="right">
                <Typography color="white">{price}</Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Icon
                        as={trend === 'up' ? 'Up' : 'Down'}
                        width={12}
                        height={12}
                        style={{ marginRight: 4 }}
                        fill={trend === 'up' ? '#7FE860' : 'red'}
                    />
                    <Typography variant="caption" sx={{ color: trend === 'up' ? '#7FE860' : 'red' }}>
                        {trend === 'up' ? '+3.15%' : '-3.15%'}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
