import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => `${`http://${props.image}`}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;

  .text-area {
    width: 100%;
    max-width: 864px;
    padding: 15px;

    .category-area {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 60px;

      p {
        font-size: 32px;
        margin-right: 20px;
      }
    }

    .title {
      margin-bottom: 20px;

      h1 {
        font-size: 64px;
      }
    }

    .movie-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      p {
        font-size: 30px;
        margin-right: 20px;

        span {
          font-size: 29px;
          color: #a7a6a6;
        }
      }
    }

    .movie-description {
      margin-top: 20px;

      p {
        font-size: 24px;
        color: #a7a6a6;
      }
    }

    .stars {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: light;
      margin-top: 32px;
      font-size: 32px;

      i {
        margin-right: 15px;
      }

      .fa-solid {
        color: #ffea2b;
      }
    }

    .btn-area {
      margin: 55px 0;
      display: flex;

      button {
        width: 272px;
        height: 64px;
        border-radius: 10px;
        font-size: 22px;
        margin-right: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          margin-left: 10px;
        }
      }

      .red-button {
        background: #d40d1f;
        color: #ffffff;
        border: none;

        :hover {
          box-shadow: 0 0 10px #d40d1f;
          font-weight: bold;
        }
      }

      .white-button {
        border: 3px solid #ffffff;
        background: transparent;
        color: #ffffff;

        :hover {
          box-shadow: 0 0 10px #ffffff;
          font-weight: bold;
        }
      }
    }
  }
`;
