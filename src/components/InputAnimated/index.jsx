import React, { useState } from "react";

import { Container } from "./styles";

function InputAnimated({
  label,
  id,
  name,
  type,
  placeholder,
  readOnly,
  value,
  onChange,
  error,
}) {
  // states
  const [showPassword, setShowPassword] = useState(false);

  // function handler animation on focus
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

  const handlerShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <Container error={error}>
      <label htmlFor={id}>
        <span id={`label-${label}`} className="placeholder">
          {placeholder}
        </span>
        <input
          type={showPassword ? "text" : type}
          id={id}
          name={name}
          onFocus={handlerFocus}
          onBlur={handlerFocus}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
        />
        {type === "password" ? (
          <span className="show-password">
            {showPassword ? (
              <button type="button" onClick={handlerShowPassword}>
                <i className="fa-regular fa-eye" />
              </button>
            ) : (
              <button type="button" onClick={handlerShowPassword}>
                <i className="fa-solid fa-eye-slash" />
              </button>
            )}
          </span>
        ) : (
          ""
        )}
      </label>
    </Container>
  );
}

export default InputAnimated;
