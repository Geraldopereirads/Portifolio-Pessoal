import { Link } from "react-router-dom";
import ImagemMain from "../../../assets/img/DesenvolvedorFrontend.svg"
export const MainHomePage = () => {
  return (
    <main>
      <div>
        <h1>
          <small>Olá,</small> Eu sou Geraldo Pereira, Desenvolvedor Front-End
        </h1>

        <h2>Seja bem-vindo ao meu portifólio website</h2>

        <Link to="/sobre">Saiba mais sobre mim</Link>
      </div>
      <img src={ImagemMain} alt="Imagem animada Desenvolvedor Front End" />
    </main>
  );
};
