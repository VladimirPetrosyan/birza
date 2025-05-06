// widgets/UserOrders/model/types.ts
import React from "react";

export type TokenOrder = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    name: string;
    ticker: string;
    amount: string;
    price: string;
    trend: 'up' | 'down';
    chartData?: number[];
};
