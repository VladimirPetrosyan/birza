import React, { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from '@/shared/config/routes/routes';
import { PageLoader } from '@/shared/ui/PageLoader';
import { useTelegramInit } from '@/app/providers/telegram';

const App = () => {
    useTelegramInit(); // ✅ теперь хук вызван в компоненте

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={routes} />
        </Suspense>
    );
};

export default App;
