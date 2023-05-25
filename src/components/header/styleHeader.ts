import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  padding: 15px;
  padding-right: 30px;
  
  width: 100%;


  @media (min-width: 700px) {
    justify-content: space-around;
  }

  @media (min-width: 900px) {
    gap: 40px;
  }
`;

export const StyleDivSociaisHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  padding-right: 50px;
`;

export const StyleNavHeader = styled.nav`
  display: flex;
  gap: 50px;

  a {
    border-bottom: solid 1px transparent;
  }

  a:hover {
    border-bottom: solid 1px var(--primary-color);
  }

  @media (max-width: 700px) {
    display: none;
  }

  @media (min-width: 800px) {
    gap: 75px;
  }

  @media (min-width: 900px) {
    gap: 100px;
  }

  @media (min-width: 1000px) {
    gap: 120px;
  }

  @media (min-width: 1100px) {
    gap: 130px;
  }

  @media (min-width: 1200px) {
    gap: 170px;
  }
`;
export const StyleButtonMenu = styled.span`
  @media (min-width: 700px) {
    display: none;
  }
`;
