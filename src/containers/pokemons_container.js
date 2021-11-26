import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_POKEMON } from "../graphql/all_pokemon";
import { PokemonCard } from "../components/pokemon_card";
import styled from "styled-components";


export const PokemonsContainer = () => {
  const [input, setInput] = useState('')
  const { data, loading, error } = useQuery(ALL_POKEMON, {
    variables: {limit: 100 }
  });
  const allPokemon = data?.allPokemon

  data && console.log(data)

  if (loading) {
    return <div>loading ...</div>
  }

  return (
    <div>
      <Header>Pokedex     
      </Header>
      <Search><input type="text "  onChange={(event) => setInput(event.currentTarget.value)}/></Search>
      <Container>
        {allPokemon.map((pokemon) => {
          return pokemon.name.includes(input) && (
           <PokemonCard key={pokemon.id} pokemon = {pokemon}/>
          )
        })}
      </Container>
    </div>
  )
};

const Header = styled.div`
text-align: center;
background-color: #B22222;
color: white;
height: 80px;
font-size:60px;
font-family: Lobster, cursive;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

const Container = styled.div`
width: 900px;
max-width: 100%;
padding: 0 10px;
margin: 0 auto;
margin-top: 40px;
display: grid;
grid-template-columns: repeat(3, 1fr);

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  }

@media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);  }
`
const Search = styled.div`
text-align: center;
height: 80px;
margin-top: 25px;
`