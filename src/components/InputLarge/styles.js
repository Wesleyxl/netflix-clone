import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 810px;

  label {
    width: 100%;
    max-width: 590px;
    position: relative;

    span {
      position: absolute;
      top: 25px;
      left: 20px;
      color: #8c8c8c;
      font-size: 18px;
      z-index: 10;
      transition: 0.2s ease;
    }
    .focused {
      top: 5px;
      font-size: 14px;
      font-weight: bold;
    }

    input {
      width: 100%;
      height: 70px;
      padding: 0 20px;
      font-size: 22px;
    }
  }

  button {
    width: 100%;
    max-width: 210px;
    height: 70px;
    background: #e50914;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    border: none;
  }
`;
