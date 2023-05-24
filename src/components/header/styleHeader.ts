import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  padding: 15px;
  padding-right: 30px;
`;

export const StyleDivSociaisHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  @media (min-width: 899px) {
    display: none;
  }
`;

export const StyleNavHeader = styled.nav`
  @media (max-width: 900px) {
    display: none;
  }
`;
