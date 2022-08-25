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

  const [submitted, setSubmitted] = useState(false);

  async function addDataHandler(user) {
    const response = await fetch(
      "https://react-http-d591e-default-rtdb.europe-west1.firebasedatabase.app/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

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

    setName("");
    setEmail("");
    setMessage("");

    setSubmitted(true);

    const user = {
      uName: name,
      uEmail: email,
      uMessage: message,
    };

    addDataHandler(user);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeMessageHandler = (event) => {
    setMessage(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submittedMessage = "The form is submitted!";

  const returnForm = () => {
    setSubmitted(false);
  };

  return (
    <div className={classes["contact-form"]}>
      {!submitted && (
        <form onSubmit={onSubmitHandler}>
          <h2>Contact Us</h2>
          <Label id="nameId" text="Full name" />
          <Input
            type="text"
            class="form-control"
            placeholder="Full name"
            onChange={onChangeNameHandler}
            value={name}
            id="nameId"
            maxlength="40"
            errorName={errorName}
          />
          <Label id="emailId" text="E-mail" />
          <Input
            type="email"
            class="form-control"
            placeholder="E-mail"
            onChange={onChangeEmailHandler}
            value={email}
            id="emailId"
            maxlength="40"
            errorEmail={errorEmail}
          />
          <Label id="messageId" text="Message" />
          <Input
            type="text"
            class="form-control"
            placeholder="Message"
            onChange={onChangeMessageHandler}
            value={message}
            id="messageId"
            maxlength="100"
            errorMessage={errorMessage}
          />
          <Button class="btn btn-primary" type="submit" text="Send Message" />
        </form>
      )}
      <div style={{ paddingTop: "10px" }}>
        <span style={{ color: "green", fontWeight: "500" }}>
          {submitted && submittedMessage}
        </span>
      </div>
      {submitted && (
        <button onClick={returnForm} className="btn btn-secondary">
          Back
        </button>
      )}
    </div>
  );
};

export default ContactForm;
