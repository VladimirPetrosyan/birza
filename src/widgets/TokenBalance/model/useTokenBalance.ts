// widgets/token-balance/model/useTokenBalance.ts
import { useState, useEffect } from 'react';

export const useTokenBalance = () => {
    const [leftValue, setLeftValue] = useState(2554);     // "ОСТАЛОСЬ"
    const [rightValue, setRightValue] = useState(2554);   // "НА БАЛАНСЕ"

    useEffect(() => {
        // В будущем — тут может быть API-запрос
        // пока — просто симулируем значения
        setLeftValue(2554);
        setRightValue(2554);
    }, []);

    return {
        leftValue,
        rightValue
    };
};
