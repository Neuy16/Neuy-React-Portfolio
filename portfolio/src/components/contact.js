import React from "react";
import "bulma/css/bulma.css";

function Contact() {
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
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
        <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
      </div>
      <button class="button">Submit</button>
    </div>
  );
}

export default Contact;
