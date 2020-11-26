import React, {PropsWithChildren} from 'react';
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";
import Pokemon, {PokemonProps} from "./pages/Pokemon";

interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: (props: PropsWithChildren<any>) => JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokedex/:id',
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

const SECOND_ROUTES: IGeneralMenu[] = [{
   title: 'Pokemon',
   link: LinkEnum.POKEMON,
   component: ({id}: PokemonProps) => <Pokemon id={id} />
}]

interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
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