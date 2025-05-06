import { Drawer, Box, Typography, Button, TextField } from "@mui/material";
import React from "react";
import { useKeyboardOffset } from "@/shared/hooks/useKeyboardOffset";

interface EditOrderModalProps {
    open: boolean;
    onClose: () => void;
}

export const EditOrderModal = ({ open, onClose }: EditOrderModalProps) => {
    const keyboardOffset = useKeyboardOffset();

    const scrollIntoViewOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            event.target.scrollIntoView({ behavior: "smooth", block: "center" });
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
                        backdropFilter: "blur(12px)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                ОРДЕР
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box flex={1} textAlign="center">
                    <Typography sx={{ color: "#888", fontSize: 12 }}>СРЕДНЯЯ ЦЕНА</Typography>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: 18 }}>₽2554</Typography>
                </Box>

                <Box sx={{ width: "1px", height: "32px", backgroundColor: "#333", mx: 2 }} />

                <Box flex={1} textAlign="center">
                    <Typography sx={{ color: "#888", fontSize: 12 }}>ЦЕНА ЗА ШТУКУ</Typography>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: 18 }}>₽2554</Typography>
                </Box>
            </Box>

            <TextField
                fullWidth
                label="Количество $SHIB"
                placeholder="Минимум 20 $SHIB"
                variant="outlined"
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onFocus={scrollIntoViewOnFocus}
                InputProps={{
                    sx: {
                        borderRadius: "9999px",
                        backgroundColor: "#1E1E1E",
                        color: "white",
                        paddingRight: "12px",
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
                        >
                            Все
                        </Typography>
                    ),
                }}
                InputLabelProps={{
                    sx: {
                        color: "#777",
                        fontSize: "14px",
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
                    mb: 3,
                }}
            />

            <TextField
                fullWidth
                label="Стоимость за штуку"
                placeholder="Минимум ₽20"
                variant="outlined"
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onFocus={scrollIntoViewOnFocus}
                InputProps={{
                    sx: {
                        borderRadius: "9999px",
                        backgroundColor: "#1E1E1E",
                        color: "white",
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: "#777",
                        fontSize: "14px",
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
                    mb: 3,
                }}
            />

            <Box display="flex" gap={2} mb={2}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#7FE860",
                        color: "black",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: 16,
                        borderRadius: "9999px",
                        py: 1.5,
                        "&:hover": {
                            backgroundColor: "#6bd552",
                        },
                    }}
                >
                    Сохранить
                </Button>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#FF3D3D",
                        color: "white",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: 16,
                        borderRadius: "9999px",
                        py: 1.5,
                        "&:hover": {
                            backgroundColor: "#e03535",
                        },
                    }}
                >
                    Удалить
                </Button>
            </Box>

            <Typography align="center" sx={{ color: "white", fontWeight: 600, fontSize: 16 }}>
                Баланс:&nbsp;
                <Typography component="span" sx={{ fontWeight: 400 }}>
                    562 $SHIB
                </Typography>
            </Typography>
        </Drawer>
    );
};
