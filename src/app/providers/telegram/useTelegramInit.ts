import { useEffect } from 'react';
import { retrieveRawInitData } from '@telegram-apps/bridge';

export const useTelegramInit = () => {
    useEffect(() => {
        if (window.Telegram?.WebApp?.requestFullscreen) {
            window.Telegram.WebApp.requestFullscreen();
        }

        // Также можно получить initData (если нужно авторизовать/валидировать)
        const initData = retrieveRawInitData();
        console.log("Telegram Init Data:", initData);
    }, []);
};
