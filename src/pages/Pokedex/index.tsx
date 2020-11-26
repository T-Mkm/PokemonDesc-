import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/PokemonCard";
import useDebounce from "../../hook/useDebounce";

// import {pokemons} from "../../pokemons";

import s from './Pokedex.module.scss';
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";

<<<<<<< Updated upstream
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
=======
import s from './Pokedex.module.scss';
import {IPokemons, PokemonsRequest} from "../../interface/pokemons";

interface IQuery {
	name?: string
}

const Pokedex = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState<IQuery>({
		limit: 12
	});
	const debouncedValue = useDebounce(searchValue, 500);
>>>>>>> Stashed changes

			getPokemons();
		}

	}, []);

	return {
		data,
		isLoading,
		isError,
<<<<<<< Updated upstream
=======
	} = useData<IPokemons>('getPokemons', query, [debouncedValue]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		 // console.log('####: e', e.target.value);
		 setSearchValue(e.target.value);
		 setQuery((state: IQuery) => ({
			...state,
			 name: e.target.value,
		 }));
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
					{data.total} <b>Pokemons</b> for you to choose favourite
				</Heading>
				<div>
					{ data.pokemons.map(item => (
=======
					{!isLoading && data && data.total} <b>Pokemons</b> for you to choose favourite
				</Heading>
				<div>
					<input type="text" value={searchValue} onChange={handleSearchChange()} />
				</div>
				<div>
					{!isLoading && data && data.pokemons.map((item: PokemonsRequest) => (
>>>>>>> Stashed changes
						<PokemonCard>
							{item}
						</PokemonCard>
					))}
				</div>
			</Layout>
		</>
	);
};

export default Pokedex;

// <div>{item.name}</div>


// {/*{*/}
// {/*	pokemons.map((pokemon) => (*/}
// {/*		<PokemonCard>*/}
// {/*			{pokemon}*/}
// {/*		</PokemonCard>*/}
// {/*	))*/}
// {/*}*/};