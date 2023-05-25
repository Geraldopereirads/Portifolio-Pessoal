import styled from "styled-components";

export const StyleMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;

  h1 {
    color: var(--text-clarified);
    max-width: 90%;
    font-size: 1.5rem;
    padding-left: 10px;
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
    width: 90%;
  }

  @media (min-width: 430px) {
    img {
      width: 70%;
    }

    h1 {
      font-size: 1.8rem;
    }

    h1 small {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.2rem;
      line-height: 125%;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;

    padding-top: 90px;

    img {
      width: 55%;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 2rem;
    }

    h1 small {
      font-size: 1rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }
    h1 small{
      font-size: 1.5rem;
    }
    h2{
      font-size: 1.5rem;
    }

    img{
      width: 46%;
    }
  }
`;

export const StyleDivMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 98%;

  a:hover{
   color: var(--title-nav);
   background-color: var(--header-color);
  }

 
`;
