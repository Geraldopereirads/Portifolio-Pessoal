import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  width: 100%;
  max-width: 100%;
  height: 70px;

  @media (min-width: 701px) {
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
  gap: 30px;

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
    gap: 50px;
  }

  @media (min-width: 900px) {
    gap: 60px;
  }

  @media (min-width: 1000px) {
    gap: 75px;
  }

  @media (min-width: 1100px) {
    gap: 90px;
  }

  @media (min-width: 1200px) {
    gap: 125px;
  }
`;
export const StyleButtonMenu = styled.span`
  padding-left: 20px;

  @media (min-width: 701px) {
    display: none;
  }
`;
