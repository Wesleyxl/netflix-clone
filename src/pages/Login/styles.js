import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  .error-area {
    color: #e87c03;
    font-size: 14px;
    margin: 5px 0;
  }

  .logo-area {
    position: absolute;
    top: 15px;
    left: 15%;
  }

  .card-login {
    width: 100%;
    max-width: 450px;
    min-height: 660px;
    background: rgba(0, 0, 0, 0.75);
    padding: 60px;

    h1 {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .input-area {
      width: 100%;
      height: 51px;
      margin: 0 auto 16px;
    }

    .btn-submit {
      width: 100%;
      height: 51px;
      background: #a91013;
      border: none;
      margin-top: 24px;
      color: #ffffff;
      font-size: 18px;
      border-radius: 4px;

      :hover {
        font-weight: bold;
        box-shadow: 0 0 10px #a91013;
      }
    }

    .footer-area {
      margin-top: 56px;

      p {
        margin: 16px 0;
        color: #8c8c8c;

        a {
          color: #ffffff;

          :hover {
            font-weight: bold;
          }
        }
      }
    }
  }
`;
