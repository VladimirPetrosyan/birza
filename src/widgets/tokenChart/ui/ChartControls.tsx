import React from 'react';
import { Box, Button } from '@mui/material';
import { ChartPeriod } from '../model/useTokenChartData';

const periods: ChartPeriod[] = ['all', 'year', 'month', 'week', 'day'];
const labels: Record<ChartPeriod, string> = {
    all: 'ВСЕ',
    year: 'ГОД',
    month: 'МЕС',
    week: 'НЕД',
    day: 'СЕГ',
};

type Props = {
    period: ChartPeriod;
    onChange: (p: ChartPeriod) => void;
};

export const ChartControls: React.FC<Props> = ({ period, onChange }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            gap={'38px'}
            mt={2}
        >
            {periods.map((p) => (
                <React.Fragment key={p}>
                    <Button
                        onClick={() => onChange(p)}
                        sx={{
                            color: p === period ? 'white' : 'rgba(255, 255, 255, 0.4)',
                            textTransform: 'none',
                            fontWeight: p === period ? 'bold' : 'normal',
                            minWidth: 0,
                            padding: 0,
                            fontSize: 14,
                            borderBottom: p === period ? '2px solid white' : '2px solid transparent',
                            borderRadius: 0,
                        }}
                    >
                        {labels[p]}
                    </Button>
                </React.Fragment>
            ))}
        </Box>
    );
};
