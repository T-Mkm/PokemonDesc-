import React from 'react';
// import cn from 'classnames';

import s from './Header.module.scss';

import {ReactComponent as pokemonLogoSvg} from './assets/Logo.svg';

interface IMenu {
	id: number
	value: string
	link: string
}

const MENU: IMenu[] = [
	{
		id: 1,
		value: "Home",
		link: '#',
	},
	{
		id: 2,
		value: "Pokedex",
		link: '#',
	},
	{
		id: 3,
		value: "Legenaries",
		link: '#',
	},
	{
		id: 4,
		value: "Documentation",
		link: '#',
	}
];

const Header = () => {
	return (
		<div className={s.root}>
			<div className={s.wrap}> 
				<div className={s.pokemonLogo}>
					<pokemonLogoSvg />
				</div>
				<div className={s.menuWrap}>
					{
						MENU.map(({value, link, id}) => (
							<a key={id} href={link} className={s.menuLink}>
								{ value }
							</a>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Header;