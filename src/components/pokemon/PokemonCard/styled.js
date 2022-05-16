import styled from "@emotion/styled";

export const StyledPokemonCard = styled.div`
  border-radius: 9px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  display: flex;

  .info {
    width: 50%;
  }

  .image {
    width: 50%;
    min-height: 100px;
    position: relative;

    img {
      z-index: 2;
      position: absolute;
      height: 100%;
    }

    #bg-img {
      z-index: 1;
      position: absolute;
      height: 80%;
      opacity: 0.2;
    }

  }
  &:hover {
    transform: scale(1.03);
    transition: transform 150ms;
  }
`