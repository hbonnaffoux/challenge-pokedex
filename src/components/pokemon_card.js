import React, {useState, useEffect} from "react";


export const PokemonCard = (pokemon) => {
    return (
        <div className="pokemon">
            {/*<div className ="pokemon-image"> {pokemon.stripes.front_default}</div>*/}
            <div className="pokemon-id">{pokemon.id}</div>
            <div className="pokemon-name">{pokemon.name}</div>
            {/*<div className ="pokemon-type"> {pokemon.types.name.map(type => ({type.name})) } </div>*/}
        </div>
    );
};