// src/shared/hooks/useTradeActions.ts
import { useState } from 'react';

export const useTradeActions = () => {
    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);

    const openBuy = () => setIsBuyModalOpen(true);
    const closeBuy = () => setIsBuyModalOpen(false);

    const openSell = () => setIsSellModalOpen(true);
    const closeSell = () => setIsSellModalOpen(false);

    return {
        isBuyModalOpen,
        isSellModalOpen,
        openBuy,
        closeBuy,
        openSell,
        closeSell,

        // алиасы для удобства
        buy: openBuy,
        sell: openSell,
    };
};
