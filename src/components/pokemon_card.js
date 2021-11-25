import React, {useState, useEffect} from "react";


export const PokemonCard = ({pokemon}) => {
    return (
        <div className="pokemon">
        <img src={pokemon.sprites.front_default} className ="pokemon-image"></img>
        <div className="pokemon-id">{pokemon.id}</div>
        <div className="pokemon-name">{pokemon.name}</div>
        <div className ="pokemon-type"> {pokemon.types.map(type => (type.name)).join(' | ') } </div>
        </div>
    );
};