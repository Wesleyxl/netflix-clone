import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Start</NavLink>
          </li>
          <li>
            <NavLink to="/">Shows</NavLink>
          </li>
          <li>
            <NavLink to="/">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/">New</NavLink>
          </li>
          <li>
            <NavLink to="/">My List</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <i className="fa-regular fa-heart" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="fa-regular fa-bell" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
