import styled from "styled-components";

export const Card = styled.div`
width: 200px;
padding: 10px 20px;
margin: 0 auto;
margin-bottom: 15px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const PokemonImage = styled.img`
width: 200px;
`

export const PokemonName = styled.div`
font-size: 20px;
text-align:center;
`

export const PokemonType = styled.div`
font-size: 16px;
font-weight: bolder;
text-align:center;
`

export const PokemonId = styled.div`
font-size: 16px;
font-weight: bolder;
text-align:center;`

