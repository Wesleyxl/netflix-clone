import React from "react";

import Logo from "../../assets/logo.png";
import { Container, Intro } from "./styles";

function Home() {
  return (
    <Container>
      <Intro>
        <header>
          <ul>
            <li>
              <img src={Logo} alt="Netflix Clone" />
            </li>
            <li>
              <div className="select-input">
                <i id="globe" className="fa-solid fa-globe" />
                <select name="language" id="language">
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                </select>
                <i id="chevron" className="fa-solid fa-chevron-down" />
              </div>
              <a href="/login" alt="login" title="login">
                Entrar
              </a>
            </li>
          </ul>
        </header>
      </Intro>
    </Container>
  );
}

export default Home;
