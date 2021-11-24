import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_POKEMON } from "../graphql/get-pokemons";

export const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(ALL_POKEMON, {
    variables: { limit: 100 },
  });


  return <div className="pokemons">{pokemons.map(pokemon => console.log(pokemon))}</div>;
  
};
