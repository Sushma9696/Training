import React, { Component } from "react";
const Input = ({
  inputName,
  value,
  type,
  handleInputField,
  label,
  error,
  disabled
}) => {
  // const { inputName, value, type, handleInputField, label, error} = props;
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        //ref={this.username}
        onChange={handleInputField}
        disabled={disabled}
      />
      {error && <p className="text-danger small">{error} *</p>}
    </div>
  );
};

export default Input;
