import { Box, SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import { TokenCard } from '@/entities/Token/ui/TokenCard';
import { EditOrderModal } from '@/features/editOrder';
import XRP from '@/shared/assets/icons/Shibo.svg?react';
import DOT from '@/shared/assets/icons/DOT.svg?react';
import TRX from '@/shared/assets/icons/TRX.svg?react';

const DOTRaw = DOT as React.FC<React.SVGProps<SVGSVGElement>>;
const XRPRaw = XRP as React.FC<React.SVGProps<SVGSVGElement>>;
const TRXRaw = TRX as React.FC<React.SVGProps<SVGSVGElement>>;

type Props = {
    open: boolean;
    onClose: () => void;
};

export const OrdersModal = ({ open, onClose }: Props) => {
    const [isEditOpen, setEditOpen] = useState(false);

    const handleCardClick = () => {
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    return (
        <>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={onClose}
                ModalProps={{ keepMounted: true }}
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
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', py: 2, zIndex: 2 }}>
                        <Box
                            sx={{
                                px: 2,
                                overflowY: 'auto',
                                position: 'relative',
                                background: 'rgba(25, 25, 25, 1)',
                                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                                backdropFilter: 'blur(32px)',
                                height: '100dvh',
                            }}
                        >
                            <Box overflowY="auto" height="100%" display="flex" flexDirection="column">
                                <Box onClick={handleCardClick}>
                                    <TokenCard
                                        icon={XRPRaw}
                                        name="Ripple"
                                        ticker="XRP"
                                        amount="200489"
                                        price="₽32.2541"
                                        trend="up"
                                        variant="order"
                                    />
                                </Box>
                                <Box onClick={handleCardClick}>
                                    <TokenCard
                                        icon={DOTRaw}
                                        name="Ripple"
                                        ticker="DOT"
                                        amount="120000"
                                        price="₽15.889"
                                        trend="down"
                                        variant="order"
                                    />
                                </Box>
                                <Box onClick={handleCardClick}>
                                    <TokenCard
                                        icon={TRXRaw}
                                        name="Ripple"
                                        ticker="TRX"
                                        amount="90000"
                                        price="₽9.99"
                                        trend="up"
                                        variant="order"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwipeableDrawer>

            {/* Модалка редактирования ордера */}
            <EditOrderModal open={isEditOpen} onClose={handleEditClose} />
        </>
    );
};
