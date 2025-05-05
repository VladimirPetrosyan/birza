// src/features/DepositModal/ui/DepositModal.tsx
import { Box, Typography, TextField, Button, Modal } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useMenuBarStore } from '@/shared/store/menuBar';
import {useLockScroll} from "@/shared/hooks/useLockScroll";

type Props = {
    open: boolean;
    onClose: () => void;
};

export const DepositModal = ({ open, onClose }: Props) => {
    const [amount, setAmount] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const { hide, show } = useMenuBarStore();
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const isAndroid = /Android/i.test(navigator.userAgent);
    useLockScroll(open);
    useEffect(() => {
        open ? hide() : show();
    }, [open]);

    if (!open) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            disableScrollLock
            BackdropProps={{
                sx: {
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    backgroundColor: 'rgba(25, 25, 25, 0.95)',
                    px: 3,
                    pb: isKeyboardOpen && !isAndroid ? 35 : 3,
                    pt: 3,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Typography
                    sx={{
                        color: '#aaa',
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 500,
                        mb: 3,
                    }}
                >
                    ПОПОЛНЕНИЕ СЧЁТА
                </Typography>

                <TextField
                    label="Сумма, ₽"
                    placeholder="Минимум ₽100"
                    fullWidth
                    autoFocus
                    inputRef={inputRef}
                    onFocus={() => setIsKeyboardOpen(true)}
                    onBlur={() => setIsKeyboardOpen(false)}
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    InputLabelProps={{
                        sx: {
                            pl: 1,
                            backgroundColor: 'rgba(25, 25, 25, 0.9)',
                            px: 0.5,
                        },
                    }}
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 999,
                            '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                                borderColor: '#7FE860',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#7FE860',
                            },
                            '& input': {
                                color: '#7FE860',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.5)',
                        },
                        '& label.Mui-focused': {
                            color: '#7FE860',
                        },
                    }}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#7FE860',
                        borderRadius: 999,
                        color: 'black',
                        fontWeight: 400,
                        py: 1.5,
                        fontSize: 16,
                        '&:hover': {
                            backgroundColor: '#6dd856',
                        },
                    }}
                >
                    Внести
                </Button>
            </Box>
        </Modal>
    );
};
