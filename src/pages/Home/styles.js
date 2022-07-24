import styled from "styled-components";

import Background from "../../assets/background.jpg";

export const Container = styled.main``;

export const Intro = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  position: relative;
  z-index: 1;
  border-bottom: 8px solid #222;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  header {
    width: 100%;
    height: 100px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 15px;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 100%;
        max-width: 167px;
      }

      li {
        display: flex;

        .select-input {
          position: relative;
          margin-right: 35px;

          #globe {
            font-size: 12px;
            color: #ffffff;
            position: absolute;
            top: 12px;
            left: 5px;
          }

          select {
            padding: 10px 22px;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            appearance: none;
          }

          #chevron {
            font-size: 12px;
            color: #ffffff;
            position: absolute;
            top: 12px;
            right: 5px;
          }
        }

        a {
          background: #e50914;
          color: #fff;
          padding: 7px 17px;
          border-radius: 4px;
        }
      }
    }
  }

  .content {
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 64px;
    }

    h2 {
      margin: 15px 0;
      font-size: 25px;
      font-weight: 500;
      letter-spacing: 1px;
    }

    p {
      margin-bottom: 20px;
      font-size: 22px;
    }
  }
`;
