import React, { useState, useRef } from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom"
import {Container} from 'emotion-flex';

import { useQuery } from '@apollo/client'
import { POKEMON } from '../../query';
import { useOnClickOutside } from '../../utils/helpers';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import Layout from '../../components/commons/layout/Layout';
import Loader from './Loader';

import { StyledDetail, StyledModal} from './styled';

export default function Detail() {
  const [name, setName]                 = useState('');
  const [success, setSuccess]           = useState(false);
  const [openModal, setOpenModal]       = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const cardRef   = useRef();
  const params    = useParams();
  const history   = useNavigate();
  const { state } = useLocation();

  const { loading, error, data } = useQuery(POKEMON, { variables: { name: params.name } });
  const [pokemons, setPokemons]  = useLocalStorage('pokemons', []);


  useOnClickOutside(cardRef, () => setOpenModal(false));

  const handleAdd = () => {
    if (!name) return setErrorMessage('Please enter a name');
    if (pokemons.find(pokemon => pokemon.name === name)) return setErrorMessage('Pokemon already exists, please enter another name!');

    const newPokemon = {
      name: name,
      pokemon_image: state.image,
      pokemon_name: data.pokemon.name,
    }

    setPokemons([...pokemons, newPokemon ]);
    setSuccess(true);
  }

  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <Container>
        { loading ? <Loader /> : (
          <StyledDetail bg={state.bg}>
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
        ) }

        <StyledModal open={openModal}>
          <div className="card" ref={cardRef}>
            <div className="content">
              {!success ? (
                <>
                  <h1>Gotcha!</h1>
                  <input type="text"
                    placeholder="Now enter your wartortle nickname"
                    onChange={(e) => setName(e.target.value)}
                  />
                  { errorMessage && <div className="error">{ errorMessage }</div> }
                  <button onClick={handleAdd}>
                    Submit
                  </button>
                </>
              ) : (
                <>
                  <h1>Your Pokemon is safe!</h1>
                  { errorMessage && <div className="error">{ errorMessage }</div> }
                  <button onClick={() => history('/pokebag')}>
                    See PokeBag
                  </button>
                </>
              )}
            </div>
          </div>
        </StyledModal>

      </Container>
    </Layout>
  )
}
