import React from "react";

import Logo from "../../assets/logo.png";
import InputLarge from "../../components/InputLarge";
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
        <div className="content">
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <p>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <InputLarge type="email" id="email" name="email" label="email" />
        </div>
      </Intro>
    </Container>
  );
}

export default Home;
