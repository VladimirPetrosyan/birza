import { Box } from '@mui/material';
import { NavItem } from './NavItem';
import { useLocation } from 'react-router-dom'; // ✅ импорт
import HomeIcon from '@/shared/assets/icons/Home.svg?react';
import WorkIcon from '@/shared/assets/icons/Profile.svg?react';
import BarChartIcon from '@/shared/assets/icons/Birza.svg?react';

const navItems = [
    { label: 'Профиль', icon: WorkIcon, to: '/profile' },
    { label: 'Главная', icon: HomeIcon, to: '/' },
    { label: 'Статистика', icon: BarChartIcon, to: '/birza' },
];

export const MenuBar = () => {
    const { pathname } = useLocation(); // ✅ получить текущий путь

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                zIndex: 999,
                pointerEvents: 'auto',

            }}
        >
            <>
            {navItems.map((item) => (
                <NavItem key={item.to} {...item} isActive={pathname === item.to} />
            ))}
            </>
        </Box>

    );
};
