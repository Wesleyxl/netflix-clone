import React, { useState } from "react";

import { auth } from "../../api";
import Background from "../../assets/auth/background-login.png";
import Logo from "../../assets/auth/logo-login.png";
import InputAnimated from "../../components/InputAnimated";
import { Container } from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    setReadOnly(true);

    const response = await auth.login(email, password);

    if (response.error) {
      setReadOnly(false);
      setError(true);

      setMessage(response.error);
    } else {
      const { user, access_token } = response;

      localStorage.setItem("id", JSON.stringify(user.id));
      localStorage.setItem("name", JSON.stringify(user.name));
      localStorage.setItem("email", JSON.stringify(user.email));
      localStorage.setItem("access_token", JSON.stringify(access_token));

      window.location = "/";
    }
  };

  return (
    <Container background={Background}>
      <div className="logo-area">
        <img src={Logo} alt="Login" title="login" />
      </div>
      <div className="card-login">
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>

          {message && (
            <div className="error-area">
              <p>{message}</p>
            </div>
          )}

          <div className="input-area">
            <InputAnimated
              label="email"
              name="email"
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={readOnly}
              error={error}
            />
          </div>
          <div className="input-area">
            <InputAnimated
              label="password"
              name="password"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              readOnly={readOnly}
              error={error}
            />
          </div>

          <button className="btn-submit" type="submit">
            Entrar
          </button>
        </form>

        <div className="footer-area">
          <p>
            Novo por aqui? <a href="/registre-se">Assine agora</a>
          </p>
          <p>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. Saiba mais
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Login;
