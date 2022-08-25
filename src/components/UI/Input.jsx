import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <input
        type={props.type}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
