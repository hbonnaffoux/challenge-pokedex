import React, {useState, useEffect} from "react";
import { Card, PokemonName, PokemonType, PokemonId } from "./styles/Card.styled";

export const PokemonCard = ({pokemon}) => {
    return (
        <Card>
        <img src={pokemon.sprites.front_default}></img>
        <PokemonId>{pokemon.id}</PokemonId>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType> {pokemon.types.map(type => (type.name)).join(' | ') } </PokemonType>
        </Card>
    );
};