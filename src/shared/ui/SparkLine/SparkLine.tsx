// shared/ui/Sparkline/Sparkline.tsx
import { LineChart, Line } from 'recharts';

type SparklineProps = {
    data: number[];
    trend: 'up' | 'down';
};

export const Sparkline = ({ data, trend }: SparklineProps) => (
    <LineChart width={60} height={24} data={data.map((v, i) => ({ value: v, name: i }))}>
        <Line
            type="monotone"
            dataKey="value"
            stroke={trend === 'up' ? '#7FE860' : '#FF5A5A'}
            strokeWidth={2}
            dot={false}
        />
    </LineChart>
);
