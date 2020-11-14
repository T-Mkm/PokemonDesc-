import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/PokemonCard";

// import {pokemons} from "../../pokemons";

import s from './Pokedex.module.scss';
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";

const usePokemons = () => {
	const [data , setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getPokemons = async() => {
			setIsLoading(true);
			try {
				const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
				const result = await response.json();

				setData(result);
			} catch (e) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}

			getPokemons();
		}

	}, []);

	return {
		data,
		isLoading,
		isError,
	}
}

const Pokedex = () => {

	const {
		data,
		isLoading,
		isError
	} = usePokemons();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Something Wrong!</div>
	}

	return (
		<>
			<Layout className={s.root}>
				<Heading size="l" className={s.title}>
					{data.total} <b>Pokemons</b> for you to choose favourite
				</Heading>
				<div>
					{ data.pokemons.map(item => (
						<PokemonCard>
							{item}
						</PokemonCard>
					))}
				</div>
			</Layout>
		</>
	);
};

export default Pokedex

// <div>{item.name}</div>


// {/*{*/}
// {/*	pokemons.map((pokemon) => (*/}
// {/*		<PokemonCard>*/}
// {/*			{pokemon}*/}
// {/*		</PokemonCard>*/}
// {/*	))*/}
// {/*}*/};