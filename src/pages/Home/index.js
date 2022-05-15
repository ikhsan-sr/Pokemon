import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { POKEMONS } from '../../query';

export default function HomePage() {
  const { loading, error, data } = useQuery(POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.results.map((pokemon, index) => (
    <Link to={`/${pokemon.name}`}key={index}>
      <h1>{pokemon.name}</h1>
    </Link>
  ))
}
