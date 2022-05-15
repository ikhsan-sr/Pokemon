import React from 'react'
import { gql, useQuery } from '@apollo/client'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

// import { useQuery } from 'react-apollo';


// client.query({
//     query: gql`
//       {
//         pokemons {
//           results {
//             name
//             image
//           }
//         }
//       }
//     `
//   }).then(result => console.log(result));

// const pokemonsQuery = gql`
// {
//     pokemons {
//       results {
//         name
//         image
//       }
//     }
//   }
// `

const POKEMONS = gql`
  query GetPokemons {
    pokemons {
      results {
        name
        image
      }
    }
}
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.results.map((pokemon, index) => (
    <div key={index}>
      <h1>{pokemon.name}</h1>
    </div>
  ))

  // return (
  //   <Query query={pokemonsQuery} notifyOnNetworkStatusChange={true}>
  //      {({ loading, error, data }) => {
  //         if(loading) return <p>Loading...</p>
  //         if(error) return <p>Error...</p>

  //         if(data) return data.pokemons.results.map((pokemon, index) => (
  //           <div key={index}>
  //             <h1>{pokemon.name}</h1>
  //           </div>
  //         ))
  //      }}
  //   </Query>
  // )
}
