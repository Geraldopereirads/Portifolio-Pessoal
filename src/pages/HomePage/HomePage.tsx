import { Header } from "../../components/header/Header";
import { StyledContainer } from "../../styles/grid";
import { MainHomePage } from "./MainHomePage/mainHomePage";
import { StyleDivBackGround } from "./styleHomePage";

export const HomePage = () => {
  return (
    <>
    <Header />
    <StyleDivBackGround>
      <StyledContainer>
        <MainHomePage />
      </StyledContainer>
    </StyleDivBackGround>
    </>
  );
};
