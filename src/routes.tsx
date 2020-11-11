import React from 'react';
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";

interface IGeneralMenu {
    title: string,
    link: string,
    component: () => JSX.Element
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: "Home",
        link: '/',
        component: () => <HomePage />
    },
    {
        title: "Pokedex",
        link: '/pokedex',
        component: () => <EmptyPage title="Pokedex" />
    },
    {
        title: "Legenaries",
        link: '/legendaries',
        component: () => <EmptyPage title="Legenaries" />
    },
    {
        title: "Documentation",
        link: '/documentation',
        component: () => <EmptyPage title="Documentation" />
    }
];

interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});


// MENU.reduce((acc, item) => {
//     acc[item.link] = item.component;
//     return acc;
// }, {});


// const routes = {
//     '/': () => <HomePage />,
//     '/pokedex': () => <EmptyPage />
// }

export default routes;