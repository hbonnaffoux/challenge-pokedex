import { gql } from "graphql-tag"

export const ALL_TYPES = gql`
  query allTypes($start: Int, $end: Int) {
    allTypes(start: $start, end: $end) {
      id
      name
    }
  }
`
