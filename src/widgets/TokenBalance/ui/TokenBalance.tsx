// widgets/token-balance/ui/TokenBalance.tsx
import React from 'react';
import { useTokenBalance } from '../model/useTokenBalance';

export const TokenBalance = () => {
    const { leftValue, rightValue } = useTokenBalance();

    return (
        <div className="flex justify-between text-white text-sm mt-2 px-2">
            <div className="flex flex-col items-start">
                <span className="opacity-40">ОСТАЛОСЬ</span>
                <span className="font-bold text-lg">{leftValue}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="opacity-40">НА БАЛАНСЕ</span>
                <span className="font-bold text-lg">{rightValue}</span>
            </div>
        </div>
    );
};
