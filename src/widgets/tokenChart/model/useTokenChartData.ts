import { useState, useEffect } from 'react';

export type ChartPeriod = 'all' | 'year' | 'month' | 'week' | 'day';

type ChartPoint = {
    name: string; // Метка по оси X (время/дата)
    value: number;
};

export const useTokenChartData = () => {
    const [period, setPeriod] = useState<ChartPeriod>('day');
    const [data, setData] = useState<ChartPoint[]>([]);
    const [currentPrice, setCurrentPrice] = useState(12456.98);
    const [priceChange, setPriceChange] = useState(3.21);

    useEffect(() => {
        const rawData: Record<ChartPeriod, number[]> = {
            day: [80, 85, 60, 95, 70, 100, 65, 110, 75, 120],
            week: [80, 82, 79, 90, 91],
            month: [75, 85, 80, 90, 92],
            year: [60, 70, 75, 85, 95],
            all: [50, 60, 70, 80, 90],
        };

        const now = new Date();

        const formatted = rawData[period].map((value, index, arr) => {
            // Шаг назад в часах/днях, зависит от периода
            const shiftMap: Record<ChartPeriod, number> = {
                day: 1,       // каждый час
                week: 24,     // каждые 24 часа
                month: 48,    // каждые 2 дня
                year: 168,    // каждую неделю
                all: 720,     // каждый месяц
            };

            const hoursBack = shiftMap[period] * (arr.length - 1 - index);
            const pointTime = new Date(now.getTime() - hoursBack * 60 * 60 * 1000);

            return {
                name: pointTime.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }), // или .toLocaleTimeString() для 'day'
                value,
            };
        });

        setData(formatted);
    }, [period]);

    return {
        period,
        setPeriod,
        data,
        currentPrice,
        priceChange,
    };
};
