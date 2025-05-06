import React from 'react';
import { Button, Box } from '@mui/material';
import { BuyTokenModal } from '@/features/BuyToken/ui/BuyTokenModal';
import { SellTokenModal } from '@/features/SellToken';
import BuyIcon from '@/shared/assets/icons/buy.svg?react';
import SellIcon from '@/shared/assets/icons/sell.svg?react';
import { useTradeModals } from '@/shared/ui/Modal/useTradeModals';
import { UserOrdersModal } from '@/features/UserOrdersModal';

type Props = {
    useUserFlow?: boolean;
};

export const TokenTrade = ({ useUserFlow = false }: Props) => {
    const {
        openBuyToken,
        closeBuyToken,
        isBuyTokenOpen,
        openSellModal,
        closeSellModal,
        isSellModalOpen,
        isUserOrdersOpen,
        openUserOrders,
        closeUserOrders,
        onUserSelected,
    } = useTradeModals();

    return (
        <>
            <Box display="flex" gap={2}>
                <Button
                    onClick={openSellModal}
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
                        '&:hover': { bgcolor: '#6bd552' },
                        zIndex: 3,
                    }}
                >
                    Продать
                </Button>

                <Button
                    onClick={useUserFlow ? openUserOrders : openBuyToken}
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
                        '&:hover': { bgcolor: '#6bd552' },
                        zIndex: 3,
                    }}
                >
                    Купить
                </Button>
            </Box>

            <BuyTokenModal open={isBuyTokenOpen} onClose={closeBuyToken} />
            <SellTokenModal open={isSellModalOpen} onClose={closeSellModal} />

            {/* только если useUserFlow */}
            {useUserFlow && (
                <UserOrdersModal
                    open={isUserOrdersOpen}
                    onClose={closeUserOrders}
                    onUserSelect={onUserSelected}
                />
            )}
        </>
    );
};
