import {NavLink} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import React from 'react';

type Props = {
    label: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    to: string,
    isActive: boolean,
    key?: string
};

export const NavItem = ({label, icon: Icon, to, isActive, key}: Props) => {
    return (
        <NavLink
            to={to}
            style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: isActive ? 110 : 60,
                padding: isActive ? '8px 16px' : 0,
                borderRadius: 40,
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                borderImageSource: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0.39%, rgba(255, 255, 255, 0.05) 25.39%, rgba(255, 255, 255, 0) 50.39%, rgba(255, 255, 255, 0.05) 75.39%, rgba(255, 255, 255, 0.2) 100.39%)',
                borderImageSlice: 1,
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <Box display="flex" alignItems="center" gap={isActive ? 1 : 0}>
                <Box
                    sx={{
                        backgroundColor: isActive ? '#7FE860' : 'transparent',
                        width: isActive ? 48 : 48,
                        height: isActive ? 48 : 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: isActive ? '0px 0px 100px 0px rgba(125, 226, 96, 1)' : 'none',
                    }}
                >
                    <Icon style={{ color: isActive ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.5)'}} width={24} height={24}/>
                </Box>

                {isActive && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontSize:16
                        }}
                    >
                        {label}
                    </Typography>
                )}
            </Box>
        </NavLink>
    );
};
