import React from "react";
import {PokemonsRequest} from "../../interface/pokemons";
import useData from "../../hook/getData";

export interface PokemonProps {
    id: string | number
}

const toCapitalizeFirstLetter = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const Pokemon: React.FC<PokemonProps> = ({id}) => {
    const {data, isLoading} = useData<PokemonsRequest>('getPokemon', {id});

    if (isLoading) {
        return (<div>Loading....</div>)
    }

    return (
        <div>
            This is pokemon id equal {toCapitalizeFirstLetter(data?.name)}
        </div>
    );
};

export default Pokemon;