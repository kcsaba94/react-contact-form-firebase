import React, { useState } from "react";

import Input from "./UI/Input";
import Label from "./UI/Label";
import Button from "./UI/Button";

import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (name.length === 0 || /\d/.test(name)) {
        setErrorName(true);
        return;
    } else {
        setErrorName(false);
    }
    if (email.trim().length === 0) {
        setErrorEmail(true);
        return;
    } else {
        setErrorEmail(false);
    }
    if (message.trim().length === 0) {
        setErrorMessage(true);
        return;
    } else {
        setErrorMessage(false);
    }

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

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  return (
    <form className={classes["contact-form"]} onSubmit={onSubmitHandler}>
      <h2>Contact Us</h2>
      <Label id='nameId' text='Full name'/>
      <Input
        type="text"
        class="form-control"
        placeholder="Full name"
        onChange={onChangeNameHandler}
        value={name}
        id='nameId'
        maxlength="40"
        errorName={errorName}
      />
        <Label id='emailId' text='E-mail'/>
        <Input
        type="email"
        class="form-control"
        placeholder="E-mail"
        onChange={onChangeEmailHandler}
        value={email}
        id='emailId'
        maxlength="40"
        errorEmail={errorEmail}
      />
      <Label id='messageId' text='Message'/>
      <Input
        type="text"
        class="form-control"
        placeholder="Message"
        onChange={onChangeMessageHandler}
        value={message}
        id='messageId'
        maxlength="100"
        errorMessage={errorMessage}
      />
      <Button class="btn btn-primary" type="submit" text="Send Message" />
    </form>
  );
};

export default ContactForm;
