import { Link } from "react-router-dom";
import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portifolio">Portifólio</Link>
        <Link to="/ferramentas">Ferramentas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/geraldo-pereira/"}>
          <GrLinkedinOption />
        </Link>
        <Link
          target="_blank"
          to={"https://github.com/Geraldopereirads"}>
          <GrGithub />
        </Link>
        <Link
          target="_blank"
          to={"https://www.instagram.com/geraldopereiradsj/"}>
          <GrInstagram />
        </Link>
      </div>
    </header>
  );
};
