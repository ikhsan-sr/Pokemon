import React from 'react'
import { Col } from 'emotion-flex'
import { Link } from 'react-router-dom';

import { StyledPokemonCard } from './styled'

export default function PokemonCard({ name, image }) {
  return (
    <Col xs={11} sm={5} md={3} lg={2} style={{ margin: 'auto'}}>
      <Link to={`/${name}`}>
        <StyledPokemonCard>
          <div className="info">
            <p>{name}</p>
          </div>
          <div className="image">
            <img src={image} alt={name} />
            <img src="/assets/icons/pokemon-symbol.svg" alt="pokemon" id="bg-img"/>
          </div>
        </StyledPokemonCard>
      </Link>
    </Col>
  )
}
