import { Box } from '@mui/material';
import { NavItem } from './NavItem';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // 👈 импорт анимации
import HomeIcon from '@/shared/assets/icons/Home.svg?react';
import WorkIcon from '@/shared/assets/icons/Profile.svg?react';
import BarChartIcon from '@/shared/assets/icons/Birza.svg?react';

const navItems = [
    { label: 'Профиль', icon: WorkIcon, to: '/profile' },
    { label: 'Главная', icon: HomeIcon, to: '/' },
    { label: 'Биржа', icon: BarChartIcon, to: '/exchange' },
];

export const MenuBar = () => {
    const { pathname } = useLocation();

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
            {navItems.map((item, index) => (
                <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
                >
                    <NavItem {...item} isActive={pathname === item.to} />
                </motion.div>
            ))}
            </>
        </Box>
    );
};
