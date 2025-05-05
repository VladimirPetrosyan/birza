// src/shared/hooks/useLockScroll.ts
import { useEffect } from 'react';

export const useLockScroll = (isLocked: boolean) => {
    useEffect(() => {
        const root = document.getElementById('root');

        if (isLocked) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            if (root) root.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            if (root) root.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            if (root) root.style.overflow = '';
        };
    }, [isLocked]);
};
