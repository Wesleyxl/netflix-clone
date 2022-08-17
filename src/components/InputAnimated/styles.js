import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .placeholder {
    transition: 0.3s ease;
    position: absolute;
    left: 10px;
    top: 15px;
    color: #ababab;
    font-size: 18px;
  }

  .focused {
    top: 5px;
    left: 25px;
    font-size: 14px;
  }

  .focused-icon {
    top: 5px;
    font-size: 14px;
    opacity: 0;
  }

  input {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-bottom: ${(props) => props.error && "2px solid #e87c03"};
    background: #333333;
    border-radius: 4px;
    padding-left: 25px;
    padding-top: 15px;
    font-size: 20px;
    color: #ffffff;
  }

  .show-password {
    position: absolute;
    right: 20px;
    top: 15px;

    button {
      border: none;
      background: transparent;
      font-size: 20px;
      color: #ababab;
    }
  }
`;
