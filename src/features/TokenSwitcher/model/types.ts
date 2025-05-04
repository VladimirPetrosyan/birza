// features/token-switcher/model/types.ts
import { ComponentType, SVGProps } from 'react';

export type Token = {
    id: string;
    name: string;
    symbol: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
};
