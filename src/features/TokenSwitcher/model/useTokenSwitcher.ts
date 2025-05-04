// features/token-switcher/model/useTokenSwitcher.ts
import { useState } from 'react';
import { Token } from './types';
import type { FC, SVGProps } from 'react';
import ShiboRaw from '@/shared/assets/icons/Shibo.svg?react';

const Shibo = ShiboRaw as FC<SVGProps<SVGSVGElement>>;
const availableTokens: Token[] = [
    {
        id: 'shib',
        name: 'Shiba Inu',
        symbol: '$SHIB',
        icon: Shibo,
    },
    {
        id: 'btc',
        name: 'Bitcoin',
        symbol: '$BTC',
        icon: Shibo,
    },
    {
        id: 'eth',
        name: 'Ethereum',
        symbol: '$ETH',
        icon: Shibo,
    },
];

export const useTokenSwitcher = () => {
    const [selectedToken, setSelectedToken] = useState<Token>(availableTokens[0]);

    const selectToken = (id: string) => {
        const token = availableTokens.find(t => t.id === id);
        if (token) setSelectedToken(token);
    };

    return {
        selectedToken,
        availableTokens,
        selectToken,
    };
};
