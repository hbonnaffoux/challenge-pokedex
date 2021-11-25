import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_POKEMON } from "../graphql/all_pokemon";
import { PokemonCard } from "../components/pokemon_card";

export const PokemonsContainer = () => {
  const [input, setInput] = useState('')
  const { data, loading, error } = useQuery(ALL_POKEMON, {
    variables: {limit: 20 }
  });
  const allPokemon = data?.allPokemon

  data && console.log(data)

  if (loading) {
    return <div>loading ...</div>
  }

  return (
    <div>
      <input type="text " onChange={(event) => setInput(event.currentTarget.value)}/>
      <div className="pokemons">
        {allPokemon.map((pokemon) => {
          return pokemon.name.includes(input) && (
           <PokemonCard key={pokemon.id} pokemon = {pokemon}/>
          )
        })}
      </div>
    </div>
  )
};
