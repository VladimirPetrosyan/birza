// src/features/buyToken/ui/BuyTokenModal.tsx
import { Drawer, Box, Typography, Button, TextField } from "@mui/material";
import BuyIcon from "@/shared/assets/icons/buy.svg?react";
import { useRef } from "react";
import { useKeyboardOffset } from "@/shared/hooks/useKeyboardOffset"; // 👈 Импортируем хук

interface BuyTokenModalProps {
    open: boolean;
    onClose: () => void;
}

export const BuyTokenModal = ({ open, onClose }: BuyTokenModalProps) => {
    const scrollIntoViewOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            event.target.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 300);
    };

    const keyboardOffset = useKeyboardOffset(); // 👈 получаем отступ

    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    backgroundColor: "#121212",
                    p: 3,
                    pb: `${24 + keyboardOffset}px`, // 👈 учёт клавиатуры
                    transition: "padding-bottom 0.3s ease",
                },
            }}
        >
            <Typography
                align="center"
                sx={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, mb: 2, fontSize: 12 }}
            >
                ПОКУПКА
            </Typography>

            <TextField
                fullWidth
                label="Сумма"
                placeholder="Минимум ₽20"
                variant="outlined"
                type="number" // 👈 это для Android
                inputProps={{
                    inputMode: "numeric", // 👈 это для iOS
                    pattern: "[0-9]*", // 👈 помогает Safari показать цифры
                }}
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

            <Button
                fullWidth
                variant="contained"
                startIcon={<BuyIcon />}
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
                Купить (≈562 $SHIB)
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
                    ₽200
                </Typography>
            </Typography>
        </Drawer>
    );
};
