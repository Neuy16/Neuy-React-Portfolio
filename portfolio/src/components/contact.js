import React, { useState } from "react";
import "bulma/css/bulma.css";

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleOnChange=(e) => {
        setEmail(e.target.value);
    };

    const emailValidation=()=> {
        const regEx= /(.+)@(.+){2,}\.(.+){2,}/g
        if(regEx.test(email)){
            setMessage("Email is valid")
        } else if(!regEx.test(email)&& email !=="") {
            setMessage("Email is not valid");
        } else {
            setMessage("");
        }
    };

  return (
    <div className="column is-3">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
            value={email}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
        <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
      </div>
      <button class="button" onClick={emailValidation}>Submit</button>
      <h3 className="has-text-danger is-size-4">{message}</h3>
    </div>
  );
}

export default Contact;
