import styled from "@emotion/styled";

export const StyledDetail = styled.div`
  margin-top: 2rem;
  text-align: center;

  .img-wrapper {
    background-color: #FFE023;
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    border-radius: 1rem;
    padding-bottom: 70px;
    position: relative;

    .pokemon-img {
      width: 100%;
      max-height: 300px;
    }

    .catch {
      position: absolute;
      cursor: pointer;
      width: 100px;
      bottom: -50px;
      left: calc(50% - 50px);
      z-index: 3;
    }
  }

  .name {
    margin-top: 55px;
    text-transform: capitalize;
  }

  .detail {
    text-align: left;

    p {
      border: 1px solid rgb(229, 231, 233);
      color: rgba(49, 53, 59, 0.68);
      text-transform: capitalize;
      display: inline-block;
      margin: 5px;
      padding: 6px 12px;
      border-radius: 10px;
    }
  }
`

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(192,192,192,0.7);
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  visibility: ${props => (props.open ? "visible" : "hidden")};

  .card {
    background-color: #FFFFFF;
    position: relative;
    bottom: 0;
    left: 0;
    height: 30%;
    border-radius: 50px 50px 0 0;
    padding: 2rem;

    .content {
      max-width: 900px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: end;

      input {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid rgb(141, 141, 141);
        font-size: 0.875rem;
        line-height: 1.5em;
        font-family: Rubik, sans-serif;
      }

      button {
        margin-top: 1.3rem;
        font-family: Rubik, sans-serif;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        background-color: #FFE023;
        color: #404040;
        border: 1px solid #FFE023;
        font-weight: bold;

        &:active {
          transform: scale(0.99);
        }
      }

      .error {
        margin-top: 10px;
        color: rgb(239,105,102);
      }
    }
}
`