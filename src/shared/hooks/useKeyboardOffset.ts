// src/shared/hooks/useKeyboardOffset.ts
import { useEffect, useState } from "react";

export function useKeyboardOffset() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const viewport = window.visualViewport;

        if (!viewport) return;

        const handleResize = () => {
            const keyboardHeight = window.innerHeight - viewport.height - viewport.offsetTop;
            setOffset(keyboardHeight > 0 ? keyboardHeight : 0);
        };

        viewport.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            viewport.removeEventListener("resize", handleResize);
        };
    }, []);

    return offset;
}
