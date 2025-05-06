import {Box, Typography} from '@mui/material';
import React from 'react';
import {Sparkline} from '@/shared/ui/SparkLine/SparkLine';
import Strelka from '@/shared/assets/icons/Strelka.svg?react'

type Props = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    name: string,
    ticker: string,
    amount: string,
    price: string,
    trend: 'up' | 'down',
    chartData?: number[],
    variant?: 'default' | 'order',
    key?: number
};

export const TokenCard = ({
                              icon: Icon,
                              name,
                              ticker,
                              amount,
                              price,
                              trend,
                              chartData,
                              variant = 'default',
                              key
                          }: Props) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            py={1}
            gap={2}
        >
            <Icon width={36} height={36} style={{borderRadius: '50%'}}/>

            <Box
                sx={{
                    borderBottom: '1px solid #333',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                    gap: variant === 'order' ? '5rem' : '3rem',
                    width: '100%',
                }}
            >
                <Box display="flex" alignItems="center" gap={3}>
                    <Box sx={{textAlign: 'left'}}>
                        <Typography color="white">{ticker}</Typography>
                        <Typography variant="caption" sx={{color: '#888'}}>
                            {amount} шт.
                        </Typography>
                    </Box>
                </Box>

                {variant === 'order' ? (
                    <>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexDirection: 'row',
                        }}>
                            <Box textAlign="right" display='flex' flexDirection="column">
                                <Typography color="white" fontWeight={600} width='100%'>
                                    {price} за шт.
                                </Typography>
                                <Typography variant="caption" sx={{color: '#888'}}>
                                    ≈{price} ср. цена
                                </Typography>
                            </Box>
                            <Box>
                                <Strelka/>
                            </Box>

                        </Box>
                    </>
                ) : (
                    <>
                        {chartData && (
                            <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                flex={1}
                                justifyContent="center"
                            >
                                <Sparkline data={chartData} trend={trend}/>
                            </Box>
                        )}
                        <Box textAlign="right">
                            <Typography color="white">{price}</Typography>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-end"
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color:
                                            trend === 'up'
                                                ? '#7FE860'
                                                : 'red',
                                    }}
                                >
                                    {trend === 'up'
                                        ? '+3.15%'
                                        : '-3.15%'}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};
