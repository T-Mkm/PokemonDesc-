import React from 'react';
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";

interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: () => JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: "Home",
        link: LinkEnum.HOME,
        component: () => <HomePage />
    },
    {
        title: "Pokedex",
        link: LinkEnum.POKEDEX,
        component: () => <EmptyPage title="Pokedex" />
    },
    {
        title: "Legenaries",
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="Legenaries" />
    },
    {
        title: "Documentation",
        link: LinkEnum.DOCUMENTATION,
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