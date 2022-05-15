import React from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { POKEMON } from '../../query';


export default function Detail() {
  let params = useParams();
  const { loading, error, data } = useQuery(POKEMON, { variables: { name: params.name } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.pokemon.name}</h1>
      <h2>{data.pokemon.id}</h2>
      {data.pokemon.moves.map((item, index) => (
        <p key={index}>{item.move.name}</p>
      ))}
      {data.pokemon.types.map((item, index) => (
        <p key={index}>{item.type.name}</p>
      ))}
    </div>
  )
}
