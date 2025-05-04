// shared/config/routes/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import React, {Suspense, LazyExoticComponent, FC, JSX} from 'react';
import { PageLoader } from '@/shared/ui/PageLoader';
import { MenuBar } from '@/widgets/MenuBar';
import { MainPageAsync as MainPage } from '@/pages/MainPage/MainPage.async';
import {ProfilePageAsync as ProfilePage} from "@/pages/Profile/ui/ProfilePage.async";

const getElement = (
    Element: LazyExoticComponent<FC<{ className?: string; }>>,
    showBar: boolean = false
) => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Element className="page-with-menu-bar">
                {showBar && <MenuBar />}
            </Element>
        </Suspense>
    );
};


export const routes = createBrowserRouter([
    {
        path: '/',
        element: getElement(MainPage, true),
        errorElement: <div>Страница не найдена</div>, // желательно добавить
    },
    {
        path: '/profile',
        element: getElement(ProfilePage, true),
        errorElement: <div>Страница не найдена</div>, // желательно добавить
    }
]);
