// widgets/model/mockOrders.ts
import type { TokenOrder } from '@/widgets/UserOrders/model/types';
import XRP from '@/shared/assets/icons/Shibo.svg?react';
import React from "react";

const XRPi = XRP as React.FC<React.SVGProps<SVGSVGElement>>;

export const mockOrders: TokenOrder[] = [
    {
        icon: XRPi,
        name: 'Ripple',
        ticker: 'XRP',
        amount: '200489',
        price: '₽32.2541',
        trend: 'down',
        chartData: [32, 33, 34, 35, 34.5, 35.1, 36],
    },
    {
        icon: XRPi,
        name: 'Ripple',
        ticker: 'XRP',
        amount: '200489',
        price: '₽32.2541',
        trend: 'up',
        chartData: [32, 33, 34, 35, 34.5, 35.1, 36],
    },
    {
        icon: XRPi,
        name: 'Ripple',
        ticker: 'XRP',
        amount: '200489',
        price: '₽32.2541',
        trend: 'up',
        chartData: [32, 33, 34, 35, 34.5, 35.1, 36],
    },
];
