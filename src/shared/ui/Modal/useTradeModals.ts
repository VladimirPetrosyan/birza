import { useState } from 'react';

export const useTradeModals = () => {
    const [isBuyTokenOpen, setBuyTokenOpen] = useState(false);
    const [isSellModalOpen, setSellModalOpen] = useState(false);
    const [isUserOrdersOpen, setUserOrdersOpen] = useState(false);

    const openBuyToken = () => setBuyTokenOpen(true);
    const closeBuyToken = () => setBuyTokenOpen(false);

    const openSellModal = () => setSellModalOpen(true);
    const closeSellModal = () => setSellModalOpen(false);

    const openUserOrders = () => setUserOrdersOpen(true);
    const closeUserOrders = () => setUserOrdersOpen(false);

    const openUserOrdersThenBuy = () => {
        setUserOrdersOpen(true); // откроется список пользователей
    };

    const onUserSelected = () => {

        setBuyTokenOpen(true);    // открыть покупку
    };

    return {
        isBuyTokenOpen,
        isSellModalOpen,
        isUserOrdersOpen,
        openBuyToken,
        closeBuyToken,
        openSellModal,
        closeSellModal,
        openUserOrders: openUserOrdersThenBuy,
        closeUserOrders,
        onUserSelected,
    };
};
