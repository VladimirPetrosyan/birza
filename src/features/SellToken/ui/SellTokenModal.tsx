// src/features/sellToken/ui/SellTokenModal.tsx
import { Drawer, Box, Typography, Button, TextField } from "@mui/material";
import SellIcon from "@/shared/assets/icons/sell.svg?react"; // 🔁 если другой, или можно повторно использовать BuyIcon
import { useKeyboardOffset } from "@/shared/hooks/useKeyboardOffset";
import React from "react";

interface SellTokenModalProps {
    open: boolean;
    onClose: () => void;
}

export const SellTokenModal = ({ open, onClose }: SellTokenModalProps) => {
    const keyboardOffset = useKeyboardOffset();

    const scrollIntoViewOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            event.target.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 300);
    };

    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            ModalProps={{
                BackdropProps: {
                    sx: {
                        backdropFilter: 'blur(12px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            }}
            PaperProps={{
                sx: {
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    backgroundColor: "#121212",
                    p: 3,
                    pb: `${48 + keyboardOffset}px`,
                    transition: "padding-bottom 0.3s ease",
                },
            }}
        >
            <Typography
                align="center"
                sx={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, mb: 2, fontSize: 12 }}
            >
                ПРОДАЖА
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box flex={1} textAlign="center">
                    <Typography sx={{ color: "#888", fontSize: 12 }}>СРЕДНЯЯ ЦЕНА</Typography>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: 18 }}>₽2554</Typography>
                </Box>

                {/* Разделитель */}
                <Box sx={{ width: "1px", height: "32px", backgroundColor: "#333", mx: 2 }} />

                <Box flex={1} textAlign="center">
                    <Typography sx={{ color: "#888", fontSize: 12 }}>ЦЕНА ЗА ШТУКУ</Typography>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: 18 }}>₽2554</Typography>
                </Box>
            </Box>


            <Box display="flex" alignItems="center" flexDirection="column">
                <TextField
                    fullWidth
                    label="Сумма $SHIB"
                    placeholder="Минимум 20 $SHIB"
                    variant="outlined"
                    type="number"
                    inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                    }}
                    onFocus={scrollIntoViewOnFocus}
                    InputProps={{
                        sx: {
                            borderRadius: "9999px",
                            backgroundColor: "#1E1E1E",
                            color: "white",
                            paddingRight: "12px", // чтобы текст не наезжал на кнопку
                        },
                        endAdornment: (
                            <Typography
                                sx={{
                                    color: "#7FE860",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    mr: 1,
                                }}
                                onClick={() => {
                                    // TODO: логика подстановки всей суммы
                                }}
                            >
                                Все
                            </Typography>
                        ),
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#777",
                            fontSize: "14px",
                            marginBottom: "2px",
                            "&.Mui-focused": {
                                color: "#7FE860",
                                transform: "translate(20px, -7px) scale(0.75)",
                            },
                        },
                    }}
                    sx={{
                        input: { color: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#7FE860",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#7FE860",
                        },
                        mb: 3,
                    }}
                />

                <TextField
                    fullWidth
                    label="Стоимость за шт"
                    placeholder="Минимум ₽20 "
                    variant="outlined"
                    type="number"
                    inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                    }}
                    onFocus={scrollIntoViewOnFocus}
                    InputProps={{
                        sx: {
                            borderRadius: "9999px",
                            backgroundColor: "#1E1E1E",
                            color: "white",
                            paddingRight: "12px", // чтобы текст не наезжал на кнопку
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#777",
                            fontSize: "14px",
                            marginBottom: "2px",
                            "&.Mui-focused": {
                                color: "#7FE860",
                                transform: "translate(20px, -7px) scale(0.75)",
                            },
                        },
                    }}
                    sx={{
                        input: { color: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#7FE860",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#7FE860",
                        },
                        mb: 3,
                    }}
                />

            </Box>

            <Button
                fullWidth
                variant="contained"
                startIcon={<SellIcon />} // или BuyIcon, если один и тот же
                sx={{
                    backgroundColor: "#7FE860",
                    color: "black",
                    textTransform: "none",
                    fontWeight: 400,
                    fontSize: 16,
                    borderRadius: "9999px",
                    py: 1.5,
                    "&:hover": {
                        backgroundColor: "#6bd552",
                    },
                }}
            >
                Разместить ордер (≈₽20)
            </Button>

            <Typography
                align="center"
                sx={{
                    mt: 2,
                    color: "white",
                    fontWeight: 600,
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Баланс:&nbsp;
                <Typography component="span" sx={{ fontSize: 16, fontWeight: 400 }}>
                    562 $SHIB
                </Typography>
            </Typography>
        </Drawer>
    );
};
