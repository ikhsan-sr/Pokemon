import React from 'react'

import Layout from '../../components/commons/layout/Layout';
import PokemonCard from '../../components/pokemon/PokemonCard/PokemonCard';

import { Container, Row } from 'emotion-flex';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { StyledPokebag } from './styled';

export default function Pokebag() {
  const [pokemons, setPokemons] = useLocalStorage('pokemons', []);

  const handleDelete = name => {
    setPokemons(pokemons.filter(pokemon => pokemon.name !== name));
  }

  return (
    <Layout>
      <StyledPokebag>
        <Container>
          { pokemons.length > 0 ? (
            <Row>
              { pokemons.map((item, index) => (
                <PokemonCard
                  key={index}
                  name={item.pokemon_name}
                  nameBag={item.name}
                  image={item.pokemon_image}
                  canDelete={true}
                  onDelete={handleDelete}
                />
              )) }
            </Row>
          ) : <p>No pokemons yet</p> }
        </Container>
      </StyledPokebag>
    </Layout>
  )
}
