// pages/ProfilePage/ProfilePage.tsx
import { Page } from '@/shared/ui/Page';
import { GradientHeader } from '@/shared/ui/GradientHeader';
import { Box } from '@mui/material';
import { UserGreeting } from '@/widgets/UserGreeting';
import {JSX} from "react";
import { UserAssets } from '@/widgets/UserAssets';
import { UserTokens } from '@/widgets/UserTokens';
// import { TopTokens } from '@/widgets/TopTokens';


type ProfilePageProps = {
    className?: string;
};

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
    return (
        <Page>
            <GradientHeader title={'Профиль'}/>
            <Box sx={{ px: 2, py: 4, display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'black' }}>
                <UserGreeting />
                <UserAssets />
                <UserTokens />
                {/*<TopTokens />*/}
            </Box>
        </Page>
    );
};

export default ProfilePage;
