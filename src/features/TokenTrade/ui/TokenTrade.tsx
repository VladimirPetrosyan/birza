import React from 'react';
import { Button, Box } from '@mui/material';
import { useTradeActions } from '../model/useTradeActions';
import { BuyTokenModal } from '@/features/buyToken/ui/BuyTokenModal';
import SellIcon from '@/shared/assets/icons/sell.svg?react';
import BuyIcon from '@/shared/assets/icons/buy.svg?react';
import { SellTokenModal } from "@/features/SellToken";


export const TokenTrade = () => {
    const {
        isBuyModalOpen,
        isSellModalOpen,
        buy,
        sell,
        closeBuy,
        closeSell,
    }  = useTradeActions();

    return (
        <>
            <Box display="flex" gap={2}  px={2} zIndex={2}>
                <Button
                    onClick={sell}
                    variant="contained"
                    startIcon={<SellIcon width={20} height={20} />}
                    sx={{
                        flex: 1,
                        bgcolor: '#7FE860',
                        color: 'black',
                        textTransform: 'none',
                        borderRadius: '9999px',
                        fontWeight: 400,
                        fontSize: 16,
                        py: 1.5,
                        '&:hover': {
                            bgcolor: '#6bd552',
                        },
                    }}
                >
                    Продать
                </Button>

                <Button
                    onClick={buy}
                    variant="contained"
                    startIcon={<BuyIcon width={20} height={20} />}
                    sx={{
                        flex: 1,
                        bgcolor: '#7FE860',
                        color: 'black',
                        textTransform: 'none',
                        borderRadius: '9999px',
                        fontWeight: 400,
                        fontSize: 16,
                        py: 1.5,
                        '&:hover': {
                            bgcolor: '#6bd552',
                        },
                    }}
                >
                    Купить
                </Button>
            </Box>

            {/* Модалка Покупки */}
            <BuyTokenModal open={isBuyModalOpen} onClose={closeBuy} />
            <SellTokenModal open={isSellModalOpen} onClose={closeSell} />
        </>
    );
};
