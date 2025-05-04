interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;
    requestFullscreen: () => void;
    close: () => void;
    isExpanded: boolean;
    expand: () => void;
    sendData: (data: string) => void;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    isTelegramWebApp: boolean;
    setBackgroundColor: (color: string) => void;
    setHeaderColor: (color: string) => void;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    HapticFeedback?: {
        impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    };
}

interface Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}
