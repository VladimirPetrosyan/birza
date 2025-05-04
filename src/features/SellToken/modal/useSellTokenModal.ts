// src/features/buy-token/model/useSellTokenModal.ts
import { useState } from "react";

export function useSellTokenModal() {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return { open, onOpen, onClose };
}
