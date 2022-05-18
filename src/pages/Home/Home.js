import React from 'react';

import { useQuery } from '@apollo/client';
import { Container, Row } from 'emotion-flex';

import { POKEMONS } from '../../query';
import Layout from '../../components/commons/layout/Layout';
import PokemonCard from '../../components/pokemon/PokemonCard/PokemonCard';

import { StyledHome } from './styled';

export default function HomePage() {
  const { loading, error, data } = useQuery(POKEMONS);

  const getLoader = () => {
    let content = []

    for (let i = 0; i < 20; i++) {
      content.push(<PokemonCard key={i} loading={true} />)
    }

    return content;
  }

  return (
    <Layout>
      <StyledHome>
        <Container>
          <img
            src="/assets/banners/pikacu.png"
            alt="main-banner"
            id="main-banner"
          />

          { error && <p>Error :(</p> }
          <Row>
            { loading && getLoader() }
            { data && (
              <>
                { data.pokemons.results.map((pokemon, index) => (
                  <PokemonCard
                    key={index}
                    name={pokemon.name}
                    image={pokemon.dreamworld}
                  />
                ))}
              </>
            )}
          </Row>
        </Container>
      </StyledHome>
    </Layout>
  )
}
