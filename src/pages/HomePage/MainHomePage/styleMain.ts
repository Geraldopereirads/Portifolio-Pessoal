import styled from "styled-components";

export const StyleMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  overflow-x: hidden;

  h1 {
    color: var(--text-clarified);
    max-width: 77%;
    font-size: 1.5rem;
    padding-left: 10px;
    padding-top: 30px;
    line-height: 120%;

    small {
      font-size: 0.875rem;
      color: var(--text-clarified);
    }
  }

  h2 {
    font-size: 0.875rem;
    color: var(--text-clarified);
    padding-left: 10px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    background-color: var(--primary-color);

    border-radius: 8px;

    width: 215px;
    height: 40px;

    color: var(--text-dark);
    font-weight: bold;
  }

  img {
    width: 70%;
  }


  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;

    padding-top: 100px;

    img{
      width: 49%;
    }

    h1 {
      max-width: 90%;
    }
  }

`;

export const StyleDivMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 550px) {
    
  }
`;
