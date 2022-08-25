import React from 'react';

const Label = (props) => {
  return (
    <label htmlFor={props.id}>{props.text}</label>
  )
};

export default Label;