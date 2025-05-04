import {Box, Typography} from '@mui/material';

interface GradientHeaderProps {
    title?: string
}

export const GradientHeader = ({title}: GradientHeaderProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100vw',
                zIndex: 1,
            }}
        >
            {/* Абсолютно по центру — заголовок */}
            <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-50%, -200%)',
                    top: 'calc(var(--tg-safe-area-inset-top, 0px) + var(--tg-content-safe-area-inset-top))',
                    color: 'white',
                    zIndex: 2,
                    fontSize: '16px',
                    lineHeight: '14.34px',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                }}
            >
                {title}
            </Typography>

            {/* Градиентный фон */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 300,
                    background: 'radial-gradient(100% 100% at 50% 0%, rgba(125, 226, 96, 0.35) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    zIndex: 1,
                }}
            />
        </Box>
    );
};
