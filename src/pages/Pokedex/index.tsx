import React, {useState, useMemo} from 'react';
import PokemonCard from "../../components/PokemonCard";

// import {pokemons} from "../../pokemons";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import useData from "../../hook/getData";

<<<<<<< Updated upstream
import s from './Pokedex.module.scss';


const Pokedex = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState({});
=======

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
>>>>>>> Stashed changes

	// const query = useMemo(() => ({
	// 	name: searchValue
	// }), [searchValue]);

	const {
		data,
		isLoading,
		isError,
<<<<<<< Updated upstream
	} = useData('getPokemons', query, [searchValue]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		 // console.log('####: e', e.target.value);
		 setSearchValue(e.target.value);
		 setQuery((s) => ({
			...s,
			 name: e.target.value,
		 }));
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
					{!isLoading && data.total} <b>Pokemons</b> for you to choose favourite
				</Heading>
				<div>
					<input type="text" value={searchValue} onChange={handleSearchChange()} />
				</div>
				<div>
					{!isLoading && data.pokemons.map(item => (
=======

				</Heading>
				<div>
					{ data.pokemons.map(item => (
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

<<<<<<< Updated upstream
export default Pokedex

// <div>{item.name}</div>


// {/*{*/}
// {/*	pokemons.map((pokemon) => (*/}
// {/*		<PokemonCard>*/}
// {/*			{pokemon}*/}
// {/*		</PokemonCard>*/}
// {/*	))*/}
// {/*}*/};
=======
export default Pokedex;
>>>>>>> Stashed changes
