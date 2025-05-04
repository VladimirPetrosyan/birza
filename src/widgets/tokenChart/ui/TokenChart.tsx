import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import { useTokenChartData } from '../model/useTokenChartData';
import { Box, Typography, Divider } from '@mui/material';
import { ChartControls } from './ChartControls';
import type { TooltipProps } from 'recharts';
import { JSX } from 'react';

function CustomTooltip({
                           active,
                           payload,
                           label,
                       }: TooltipProps<number, string>): JSX.Element | null {
    if (active && payload && payload.length > 0) {
        return (
            <Box sx={{
                bgcolor: 'black',
                border: '1px solid #7FE860',
                borderRadius: 1,
                px: 1.5,
                py: 0.5
            }}>
                <Typography variant="caption" sx={{ color: '#7FE860' }}>
                    Цена: ₽{payload[0].value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#aaa', display: 'block' }}>
                    Время: {label}
                </Typography>
            </Box>
        );
    }

    return null;
}

export const TokenChart = () => {
    const { data, period, setPeriod, currentPrice, priceChange } = useTokenChartData();

    return (
        <Box
            sx={{
                bgcolor: '#0f0f0f',
                borderRadius: 3,
                p: 2,
                color: 'white',
                boxShadow: '0 0 12px rgba(0,255,0,0.1)',
                zIndex: 2
            }}
        >
            <Typography variant="caption" sx={{ opacity: 0.4, fontWeight: 600, fontSize: '12px' }}>
                ГРАФИК
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
                <Typography fontSize={16} fontWeight={600} display="flex" alignItems="center">
                    ₽
                    <Typography fontSize={24} lineHeight="26px">
                        {currentPrice.toLocaleString()}
                    </Typography>
                </Typography>
                <Typography variant="body2" color="lime" fontSize={16}>
                    ▲ ₽{priceChange} (1.42%)
                </Typography>
            </Box>

            {/* Увеличенный график */}
            <Box height={320} mt={2}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7FE860" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="#7FE860" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#2f2f2f" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            interval={0}
                            hide
                            padding={{ left: 0, right: 0 }}
                            tick={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 600,
                                fontSize: 12,
                                lineHeight: '14.34px',
                                letterSpacing: 0,
                                textAlign: 'center',
                                dominantBaseline: 'middle',
                            }}
                        />
                        <YAxis
                            domain={[0, 'auto']}
                            tick={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 600,
                                fontSize: 12,
                                lineHeight: '14.34px',
                                letterSpacing: 0,
                                textAlign: 'center',
                                dominantBaseline: 'middle',
                                textAnchor: 'start', // прижатие к началу
                                dx: -20, // сдвигаем влево ближе к краю
                            }}
                        />
                        <Tooltip content={CustomTooltip} />
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="#7FE860"
                            fill="url(#lineGradient)"
                            isAnimationActive
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>

            <ChartControls period={period} onChange={setPeriod} />
            <Divider sx={{ my: 1, bgcolor: '#333' }} />

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={4}
            >
                <Box textAlign="center" display={'flex'} gap={'1rem'} flexDirection="column">
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '14.34px',
                            letterSpacing: 0,
                            textAlign: 'center',
                            verticalAlign: 'middle',
                        }}
                    >
                        2554
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            fontSize: '12px',
                            lineHeight: '14.34px',
                            letterSpacing: 0,
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            opacity: 0.4,
                        }}
                    >
                        ОСТАЛОСЬ
                    </Typography>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333' }} />

                <Box textAlign="center" display={'flex'} gap={'1rem'} flexDirection="column">
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="white"
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '14.34px',
                            letterSpacing: 0,
                            textAlign: 'center',
                            verticalAlign: 'middle',
                        }}
                    >
                        2554
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            fontSize: '12px',
                            lineHeight: '14.34px',
                            letterSpacing: 0,
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            opacity: 0.4,
                        }}
                    >
                        НА БАЛАНСЕ
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
