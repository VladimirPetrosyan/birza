import { SwipeableDrawer, Box, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Strelka from '@/shared/assets/icons/Strelka.svg?react';

type Props = {
    open: boolean;
    onClose: () => void;
    onUserSelect: () => void;
};

const mockOrders = [
    { name: 'Иван Иванов', amount: '200489 шт.', price: '₽32.25 за шт.', avgPrice: '₽32.25 ср. цена' },
    { name: 'Иван Иванов', amount: '200489 шт.', price: '₽32.25 за шт.', avgPrice: '₽32.25 ср. цена' },
    { name: 'Иван Иванов', amount: '200489 шт.', price: '₽32.25 за шт.', avgPrice: '₽32.25 ср. цена' },
];

export const UserOrdersModal = ({ open, onClose, onUserSelect }: Props) => {
    return (
        <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
                BackdropProps: {
                    sx: {
                        backdropFilter: 'blur(12px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    },
                },
            }}
            PaperProps={{
                sx: {
                    height: '100dvh',
                    bgcolor: 'black',
                    overflow: 'hidden',
                    background: 'transparent',
                    zIndex: 3,
                    paddingTop: '6rem',
                },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ py: 2, px: 2, background: 'rgba(25, 25, 25, 1)', borderTopLeftRadius: 24, borderTopRightRadius: 24, boxShadow: '0px 0px 20px rgba(0,0,0,0.25)', backdropFilter: 'blur(32px)', height: '100dvh', overflowY: 'auto' }}>
                    {mockOrders.map((order, index) => (
                        <React.Fragment key={index}>
                            <Box
                                onClick={onUserSelect}
                                sx={{
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    pb: 1.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 0.5,
                                    }}
                                >
                                    {/* Левая часть */}
                                    <Box display="flex" alignItems="center">
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0.39%, rgba(255,255,255,0.05) 25.39%, rgba(255,255,255,0) 50.39%, rgba(255,255,255,0.05) 75.39%, rgba(255,255,255,0.2) 100.39%) 1',
                                                boxShadow: '0px 0px 20px rgba(0,0,0,0.25)',
                                                backdropFilter: 'blur(32px)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 1.5,
                                            }}
                                        >
                                            <PersonIcon sx={{ color: '#7FE860', fontSize: 22 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'white', fontWeight: 500 }}>
                                                {order.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#aaa' }}>
                                                {order.amount}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Правая часть */}
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Box textAlign="right">
                                            <Typography sx={{ color: 'white', fontWeight: 500 }}>
                                                {order.price}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#888' }}>
                                                {order.avgPrice}
                                            </Typography>
                                        </Box>
                                        <Strelka style={{ width: 20, height: 20 }} />
                                    </Box>
                                </Box>

                                {/* Горизонтальная линия */}
                                {index !== mockOrders.length - 1 && (
                                    <Box
                                        sx={{
                                            height: '1px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            ml: '56px',
                                            mr: '36px',
                                            mt: 1.5,
                                        }}
                                    />
                                )}
                            </Box>
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </SwipeableDrawer>
    );
};
