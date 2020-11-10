import React from 'react';
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";

import {pokemons} from "../../pokemons";

import s from './Pokedex.module.scss';


const Pokedex = () => {
	return (
		<div className={s.root}>
			<Header />
			<div className={s.wrap}>
				{
					pokemons.map((pokemon) => (
						<PokemonCard>
							{pokemon}
						</PokemonCard>
					))
				}
			</div>
		</div>
	);
};

export default Pokedex;