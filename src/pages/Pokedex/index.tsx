import React, {useState, useMemo} from 'react';
import PokemonCard from "../../components/PokemonCard";

// import {pokemons} from "../../pokemons";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import useData from "../../hook/getData";

import s from './Pokedex.module.scss';


const Pokedex = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState({});

	// const query = useMemo(() => ({
	// 	name: searchValue
	// }), [searchValue]);

	const {
		data,
		isLoading,
		isError,
	} = useData('getPokemons', query, [searchValue]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		 // console.log('####: e', e.target.value);
		 setSearchValue(e.target.value);
		 setQuery((s) => ({
			...s,
			 name: e.target.value,
		 }));
	}

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
					{!isLoading && data.total} <b>Pokemons</b> for you to choose favourite
				</Heading>
				<div>
					<input type="text" value={searchValue} onChange={handleSearchChange()} />
				</div>
				<div>
					{!isLoading && data.pokemons.map(item => (
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