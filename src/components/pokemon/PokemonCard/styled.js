import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const StyledPokemonCard = styled.div`
  border-radius: 9px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  display: flex;
  background-color: ${props => props.bg || '#fff'};
  color: #FFFFFF;
  position: relative;

  ${props => !props.canDelete && `
    &:hover {
      transform: scale(1.03);
      transition: transform 150ms;
    }
  `}


  .info {
    width: 50%;
    text-transform: capitalize;

    .title-pokemon {
      font-weight: bold;
    }
  }

  .image {
    width: 50%;
    min-height: 100px;
    position: relative;
    img {
      right: -10px;
      z-index: 2;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    #bg-img {
      z-index: 1;
      position: absolute;
      width: 150%;
      height: 150%;
      top: -25%;
      filter: brightness(0) invert(1);
      opacity: 0.5;
    }

  }

  .delete {
    position: absolute;
    left: 15px;
    bottom: 15px;
    height: 20px;

    &:hover {
      transform: scale(1.03);
      transition: transform 150ms;
    }
  }
`

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`;

export const StyledLoading = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 9px;
  margin: 0.5rem 0;

  background: #fcfcfc;
  background-image: linear-gradient(
    to right,
    #fcfcfc 0%,
    #edeef1 20%,
    #fcfcfc 40%,
    #fcfcfc 100%
  );
  background-repeat: no-repeat;
  background-size: auto 200px;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`