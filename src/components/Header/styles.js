import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 58px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  nav ul {
    display: flex;

    li a {
      color: #ffffff;
      font-size: 20px;
      margin: 0 5px;

      img {
        width: 30px;
        border-radius: 15px;
      }

      :hover {
        font-weight: bold;
      }
    }
  }
`;
