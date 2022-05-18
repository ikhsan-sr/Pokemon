import React from 'react'
import { Col } from 'emotion-flex'
import { Link } from 'react-router-dom';

import { StyledPokemonCard, StyledLoading } from './styled'

export default function PokemonCard({ name = '', image = '', canDelete = false, nameBag = '', onDelete, loading = false }) {

  const bgcolor = name => {
    if (name.length > 7) {
      return '#42C9A9'
    } else if (name.length < 7) {
      return '#FC6C6D'
    } else if (name.length === 7 ){
      return '#76BEFE'
    }
  }

  const handleDelete = name => onDelete(name);

  if (loading) {
    return (
      <Col xs={8} sm={5} md={3} lg={2} style={{ margin: 'auto'}}>
        <StyledLoading />
      </Col>
    )
  } else {
    return (
      <>
        { canDelete ? (
          <Col xs={8} sm={5} md={3} lg={2} style={{ margin: 'auto'}}>
            <StyledPokemonCard bg={bgcolor(name)} canDelete={canDelete}>
              <div className="info">
                { nameBag && <div className="title-bag">{nameBag}</div> }
                <Link to={`/${name}`} state={{ image }} style={{ zIndex: 1 }}>
                  <div className="title-pokemon">{name}</div>
                </Link>
              </div>

              <div className="image">
                <Link to={`/${name}`} state={{ image }}>
                  <img src={image} alt={name} />
                  <img src="/assets/icons/pokemon-symbol.svg" alt="pokemon" id="bg-img"/>
                </Link>
              </div>

              { canDelete && (
                <img src="/assets/icons/delete.svg" alt="pokemon" id="bg-img" onClick={() => handleDelete(nameBag)} className="delete"/>
                )}
            </StyledPokemonCard>
          </Col>
        ) : (
          <Col xs={8} sm={5} md={3} lg={2} style={{ margin: 'auto'}}>
            <Link to={`/${name}`} state={{ image }} style={{ zIndex: 1 }}>
              <StyledPokemonCard bg={bgcolor(name)} canDelete={canDelete}>
                <div className="info">
                  { nameBag && <div className="title-bag">{nameBag}</div> }
                    <div className="title-pokemon">{name}</div>
                </div>

                <div className="image">
                    <img src={image} alt={name} />
                    <img src="/assets/icons/pokemon-symbol.svg" alt="pokemon" id="bg-img"/>
                </div>

                { canDelete && (
                  <img src="/assets/icons/delete.svg" alt="pokemon" id="bg-img" onClick={() => handleDelete(nameBag)} className="delete"/>
                )}
              </StyledPokemonCard>
            </Link>
          </Col>
        ) }
      </>
    )
  }
}
