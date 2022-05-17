import React, { useState } from 'react'
import { useParams, useLocation } from "react-router-dom"
import {Container} from 'emotion-flex';

import { useQuery } from '@apollo/client'
import { POKEMON } from '../../query';

import { StyledDetail, StyledModal} from './styled';


export default function Detail() {
  const params = useParams();
  const { state } = useLocation();
  const { loading, error, data } = useQuery(POKEMON, { variables: { name: params.name } });

  const [name, setName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = () => {
    if (!name) {
      setErrorMessage('Please enter a name');
    } else {
      console.log('add', {
        name: name,
        pokemon_image: state.image,
        pokemon_name: data.pokemon.name,
      })
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('state',state);

  return (
    <Container>
      <StyledDetail>
        <div className="img-wrapper">
          <img
            src={state.image}
            alt={data.pokemon.name}
            className="pokemon-img"
          />
          <img
            src="/assets/icons/pokemon-icon.png"
            alt="Catch pokemon"
            className="catch"
            onClick={() => setOpenModal(true)}
          />
        </div>

        <h1 className="name">{data.pokemon.name}</h1>

        <div className="detail">
          <h1>Moves</h1><hr/>
          {data.pokemon.moves.map((item, index) => (
            <p key={index}>{item.move.name.replaceAll('-', ' ')}</p>
          ))}
          <h1>Types</h1><hr/>
          {data.pokemon.types.map((item, index) => (
            <p key={index}>{item.type.name.replaceAll('-', ' ')}</p>
          ))}
        </div>
      </StyledDetail>

      <StyledModal open={openModal}>
        <div className="card">
          <div className="content">
            <h1>Gotcha!</h1>
            <input type="text"
              placeholder="Now enter your wartortle nickname"
              onChange={(e) => setName(e.target.value)}
            />
            { errorMessage && <div className="error">{ errorMessage }</div> }
            <button onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      </StyledModal>
    </Container>
  )
}
