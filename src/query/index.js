import { gql } from "@apollo/client";

export const POKEMONS = gql`
  query GetPokemons {
    pokemons {
      results {
        name
        image
      }
    }
  }
`;

export const POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;