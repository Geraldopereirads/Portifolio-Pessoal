import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GrGithub,
  GrInstagram,
  GrLinkedinOption,
  GrMenu,
} from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";
import { MenuMobile } from "../menuMobile/MenuMobile";
import { StyleDivSociaisHeader, StyleHeader, StyleNavHeader } from "./styleHeader";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <StyleHeader>
      <HiMenuAlt2
        color="#DAD7D0"
        cursor="pointer"
        size={25}
        onClick={() => setMenuVisible(true)}
      />

      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <StyleNavHeader>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portifolio">Portifólio</Link>
        <Link to="/ferramentas">Ferramentas</Link>
        <Link to="/contato">Contato</Link>
      </StyleNavHeader>
      <StyleDivSociaisHeader>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/geraldo-pereira/"}>
          <GrLinkedinOption size={20}/>
        </Link>
        <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
          <GrGithub size={20}/>
        </Link>
        <Link
          target="_blank"
          to={"https://www.instagram.com/geraldopereiradsj/"}>
          <GrInstagram size={20}/>
        </Link>
      </StyleDivSociaisHeader>
    </StyleHeader>
  );
};
