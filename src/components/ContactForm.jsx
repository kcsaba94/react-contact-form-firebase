import React, { useState } from "react";

import Input from "./UI/Input";
import Button from "./UI/Button";

import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("clicked");
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const onChangeMessageHandler = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <form className={classes["contact-form"]} onSubmit={onSubmitHandler}>
      <h2>Contact Us</h2>
      <Input
        type="text"
        class="form-control"
        placeholder="Full name"
        onChange={onChangeNameHandler}
        value={name}
      />
      <Input
        type="text"
        class="form-control"
        placeholder="Message"
        onChange={onChangeMessageHandler}
        value={message}
      />
      <Button class="btn btn-primary" type="submit" text="Send Message" />
    </form>
  );
};

export default ContactForm;
