import {Box, Button, Icon, Typography} from '@mui/material';
import Up from '@/shared/assets/icons/Up.svg?react'
import Down from '@/shared/assets/icons/Down.svg?react'
import Tre from '@/shared/assets/icons/tre.svg?react'
import {WithdrawModal} from '@/features/WithdrawModal'
import {DepositModal} from '@/features/DepositModal'
import {useState} from "react";


export const UserAssets = () => {
    const [isWithdrawOpen, setWithdrawOpen] = useState(false);
    const [isDepositOpen, setDepositOpen] = useState(false);
    return (
        <Box
            mt={2}
            p={2}
            borderRadius={3}
            sx={{
                background: '#7DE260',
                color: 'black',
            }}
            zIndex={2}
        >
            <Typography variant="caption" fontWeight={400} fontSize={16} color={'rgba(0, 0, 0, 0.5)'}>АКТИВЫ</Typography>

            <Box display="flex" alignItems="center" gap={1}>
                <Box display={"flex"} alignItems="center">
                    <Typography fontWeight={600} fontSize={16} color={'rgba(0, 0, 0, 1)'} textAlign="start">
                        ₽
                    </Typography>

                    <Typography fontWeight={600} fontSize={24} color={'rgba(0, 0, 0, 1)'}>
                        12,456.98{' '}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Tre/>
                    <Typography>
                        ₽
                    </Typography>
                    <Typography>
                        3.21 (1.42%)
                    </Typography>
                </Box>
            </Box>

            <Box mt={2} display="flex" gap={2}>
                <Button
                    fullWidth
                    onClick={() => setDepositOpen(true)}
                    variant="contained"
                    startIcon={<Up />}
                    sx={{
                        background: 'rgba(0, 0, 0, 0.05)',
                        color: 'black',
                        borderRadius: 999,
                        textTransform: 'none',
                    }}
                >
                   Внести
                </Button>
                <Button
                    onClick={() => setWithdrawOpen(true)}
                    fullWidth
                    variant="contained"
                    startIcon={<Down />}
                    sx={{
                        background: 'rgba(0, 0, 0, 0.05)',
                        color: 'black',
                        borderRadius: 999,
                        textTransform: 'none',
                    }}
                >
                    Вывести
                </Button>
                <WithdrawModal open={isWithdrawOpen} onClose={() => setWithdrawOpen(false)}/>
                <DepositModal open={isDepositOpen} onClose={() => setDepositOpen(false)}/>
            </Box>
        </Box>
    );
};
