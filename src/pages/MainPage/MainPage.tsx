// pages/MainPage/MainPage.tsx

import React, {JSX, memo} from 'react';
import { TokenChart } from '@/widgets/tokenChart';
import { TokenTrade } from '@/features/TokenTrade';
import { TokenSwitcher } from '@/features/TokenSwitcher';
import { GradientHeader } from "@/shared/ui/GradientHeader";
import { Page } from '@/shared/ui/Page';
import {Box} from "@mui/material";


type MainPageProps = {
    className?: string;
};

const MainPage = ({ className }: MainPageProps): JSX.Element => {
    return (
        <Page className={className}>
            <GradientHeader title={'Главная'}/>
            <Box sx={{ px: 2, py: 2, display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'black' }}>
                <TokenSwitcher />
                <TokenTrade />
                <TokenChart />
            </Box>
        </Page>
    );
};


export default memo(MainPage);
