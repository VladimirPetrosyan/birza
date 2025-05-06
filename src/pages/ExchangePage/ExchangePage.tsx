// pages/ExchangePage/ExchangePage.tsx
import { Page } from '@/shared/ui/Page';
import { Box } from '@mui/material';
import {mockOrders} from "@/widgets/UserOrders/model/mockOrders";
import {UserOrders} from "@/widgets/UserOrders/ui/UserOrders";
import {GradientHeader} from "@/shared/ui/GradientHeader";
import {JSX, useEffect} from "react";


type ExchangePageProps ={
    className?:string;
}

const ExchangePage  = ({ className }: ExchangePageProps): JSX.Element => {
    useEffect(() => {
        document.documentElement.classList.add('no-scroll');

        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, []);
    return (
        <Page sx={{overflowY: 'hidden!important'}}>
            <GradientHeader title={'Биржа'}/>
            <Box sx={{ py: 6, px: 2, mt: 2, zIndex:3, }}>
                <UserOrders orders={mockOrders} />
            </Box>
        </Page>
    );
};

export default ExchangePage;
