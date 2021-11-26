import React, { useState, useEffect } from "react";
import { ALL_TYPES } from "../graphql/all_types";
import { useQuery } from "@apollo/react-hooks";

export const PokemonTypes = ({ filterPokemon }) => {
  const { data, loading } = useQuery(ALL_TYPES);
  const allTypes = data?.allTypes;

  if (loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      {allTypes.map((type) => (
        <button key={type.id} onClick={() => filterPokemon(type.name)}>
          {type.name}
        </button>
      ))}
    </div>
  );
};
