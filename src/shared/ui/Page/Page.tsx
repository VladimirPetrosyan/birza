// shared/ui/Page.tsx
import {Box, SxProps} from '@mui/material';
import { MenuBar } from '@/widgets/MenuBar';
import { useEffect, useRef, useState } from 'react';
import React from "react";
import { useMenuBarStore } from '@/shared/store/menuBar';

type PageProps = {
    children: React.ReactNode;
    className?: string;
    sx?: SxProps;
};

export const Page = ({ children, className = '', sx }: PageProps) => {
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const { isVisible } = useMenuBarStore();
    useEffect(() => {
        const handleScroll = () => {
            const doc = document.documentElement;
            const atBottom = doc.scrollHeight - window.innerHeight - doc.scrollTop < 10;
            setIsAtBottom(atBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            className={className}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100dvh',
                background: 'black',
                ...sx,
            }}
        >
            {/* Контент */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Box>

            {/* Пустой блок, чтобы зарезервировать место */}
            <Box sx={{ height: 80 }} />
            {isVisible && (
                <>
                    {/* Фиксированное меню, пока не скроллим до низа */}
                    {!isAtBottom && (
                        <Box
                            sx={{
                                position: 'fixed',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1000,
                            }}
                        >
                            <MenuBar />
                        </Box>
                    )}

                    {/* Обычный MenuBar — появляется внизу, когда доскроллили */}
                    {isAtBottom && (
                        <Box ref={footerRef}>
                            <MenuBar />
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};
