import { Box, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState } from 'react';
import type { TokenOrder } from '../model/types';
import { TokenTrade } from '@/features/TokenTrade';
import { UserOrdersModal } from '@/features/UserOrdersModal';
import { useTradeModals } from '@/shared/ui/Modal/useTradeModals';

type Props = {
    orders: TokenOrder[];
};

export const UserOrders = ({  orders }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { isUserOrdersOpen, closeUserOrders } = useTradeModals();

    const handleToggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <Box pt={4} sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4, width: '100%', textAlign: 'center' }}>

            {orders.map((order, idx) => {
                const isOpen = activeIndex === idx;
                const Icon = order.icon;

                return (
                    <Box
                        key={idx}
                        sx={{
                            backgroundColor: '#1D1D1D',
                            borderRadius: '16px',
                            padding: 2,
                            marginBottom: 1.5,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <Icon style={{ width: 40, height: 40, marginRight: 12 }} />
                                <Box textAlign="left">
                                    <Typography fontWeight="bold" color="white">
                                        ${order.ticker}
                                    </Typography>
                                    <Typography variant="caption" color="#aaa">
                                        На балансе: 35 шт.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                                    backdropFilter: 'blur(32px)',
                                }}
                            >
                                <IconButton onClick={() => handleToggle(idx)}>
                                    {isOpen ? (
                                        <ExpandLessIcon sx={{ color: 'white' }} />
                                    ) : (
                                        <ExpandMoreIcon sx={{ color: 'white' }} />
                                    )}
                                </IconButton>
                            </Box>
                        </Box>

                        {isOpen && (
                            <Box mt={2}>
                                <TokenTrade useUserFlow />
                            </Box>
                        )}
                    </Box>
                );
            })}

            <UserOrdersModal open={isUserOrdersOpen} onClose={closeUserOrders} />
        </Box>
    );
};
