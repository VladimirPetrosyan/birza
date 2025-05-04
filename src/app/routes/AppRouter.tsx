import { RouterProvider } from 'react-router-dom';

import { routes } from '@/shared/config/routes/routes';

export const AppRouter = () => {
    return (
        <RouterProvider router={routes}/>
    );
};
