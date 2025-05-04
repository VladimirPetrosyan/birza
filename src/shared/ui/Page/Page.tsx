// shared/ui/Page.tsx
import {Box, SxProps} from '@mui/material';
import { MenuBar } from '@/widgets/MenuBar';
import React from "react";

type PageProps = {
    children: React.ReactNode;
    className?: string;
    sx?: SxProps;
};

export const Page = ({ children, className = '', sx }: PageProps) => {
    return (
        <Box
            className={className}
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100dvh', // вся доступная высота
                overflow: 'hidden',

                background: 'black',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display:'flex',
                    flexDirection: 'column',
                    gap:'36.5px'
                }}
            >
                {children}
            </Box>

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
        </Box>
    );
};
