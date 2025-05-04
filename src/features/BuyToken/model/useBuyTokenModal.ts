// src/features/buy-token/model/useBuyTokenModal.ts
import { useState } from "react";

export const useBuyTokenModal = () => {
    const [open, setOpen] = useState(false);
    return {
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
    };
};
