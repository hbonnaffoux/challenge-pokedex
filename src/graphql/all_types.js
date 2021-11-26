import { gql } from "graphql-tag"

export const ALL_TYPES = gql`
  query allPokemon($limit: Int) {
    allPokemon(limit: $limit) {
      types {name}
    }
  }
`
