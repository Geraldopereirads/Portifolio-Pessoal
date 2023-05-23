import { Header } from "../../components/header/Header";
// import { StyledBackgroundDark } from "../../styles/background";
import { StyledContainer } from "../../styles/grid";
import { MainHomePage } from "./MainHomePage/mainHomePage";


export const HomePage = () => {
  return (
    // <StyledBackgroundDark>
    <StyledContainer>
    <Header/>
    <MainHomePage/>
    </StyledContainer>
    // </StyledBackgroundDark>
    
  );
};
