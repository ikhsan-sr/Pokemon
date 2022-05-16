import { gql } from "@apollo/client";

export const POKEMONS = gql`
  query GetPokemons {
    pokemons {
      results {
        name
        image
        image
        artwork
        dreamworld
      }
    }
  }
`;

export const POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      id
      height
      name
      weight
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;