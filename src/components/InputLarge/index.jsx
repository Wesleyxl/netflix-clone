import React from "react";

import { Container } from "./styles";

function InputLarge({ label, id, name, type }) {
  const handlerFocus = () => {
    const element = document.getElementById(`label-${label}`);
    const hasValue = document.getElementById(id).value;

    if (hasValue === "" || hasValue === null) {
      if (element.classList.contains("focused")) {
        element.classList.remove("focused");
      } else {
        element.classList.add("focused");
      }
    }
  };

  return (
    <Container>
      <label htmlFor={label}>
        <span id={`label-${label}`} className="">
          {label}
        </span>
        <input
          type={type}
          id={id}
          name={name}
          onFocus={handlerFocus}
          onBlur={handlerFocus}
          autoComplete="off"
        />
      </label>
      <button type="button">
        Vamos lá <i className="fa-solid fa-chevron-right" />
      </button>
    </Container>
  );
}

export default InputLarge;
