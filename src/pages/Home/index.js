import React from 'react'
import { useQuery } from '@apollo/client'
import { Container, Row } from 'emotion-flex'

import { POKEMONS } from '../../query';
import PokemonCard from '../../components/pokemon/PokemonCard/PokemonCard';

import { StyledHome } from './styled';

export default function HomePage() {
  const { loading, error, data } = useQuery(POKEMONS);

  return (
    <StyledHome>
      <Container>
        <img
          src="/assets/banners/pikacu.png"
          alt="main-banner"
          id="main-banner"
        />

        { loading && <p>Loading...</p> }
        { error && <p>Error :(</p> }
        { data && (
          <Row>
            { data.pokemons.results.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
              />
            )) }
          </Row>
        ) }
      </Container>
    </StyledHome>
  )
}
