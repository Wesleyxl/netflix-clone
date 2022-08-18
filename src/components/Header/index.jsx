import React from "react";
import { NavLink } from "react-router-dom";

import ProfileImage from "../../assets/auth/profile-4.png";
import Logo from "../../assets/logo.png";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <img src={Logo} alt="Netflix Clone" title="Netflix Clone" />
          </li>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/series">Séries</NavLink>
          </li>
          <li>
            <NavLink to="/filmes">Filmes</NavLink>
          </li>
          <li>
            <NavLink to="/populares">Populares</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile">
              <img src={ProfileImage} alt="Wesley" title="Wesley Alves" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoritos">
              <i className="fa-regular fa-heart" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/notificacoes">
              <i className="fa-regular fa-bell" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
