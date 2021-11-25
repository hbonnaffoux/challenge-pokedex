import { gql } from "graphql-tag"

export const ALL_POKEMON = gql`
  query allPokemon($limit: Int) {
    allPokemon(limit: $limit) {
      id
      name
      types {name}
      sprites {front_default}
    }
  }
`
