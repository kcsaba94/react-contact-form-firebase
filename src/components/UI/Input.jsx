import React from "react";

const Input = (props) => {
  const nameErr = "Name field is empty or wrong format";
  const emailErr = "Email field is empty or wrong format.";
  const messageErr = "Message field is empty or wrong format.";

  return (
    <div className="form-group">
      <input
        type={props.type}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        maxlength={props.maxlength}
      />
      <span style={{ color: "red" }}>
        {props.errorName ? nameErr : ""}
        {props.errorEmail ? emailErr : ""}
        {props.errorMessage ? messageErr : ""}
      </span>
    </div>
  );
};

export default Input;
