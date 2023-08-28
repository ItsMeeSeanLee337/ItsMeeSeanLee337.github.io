import React from 'react';

function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        
        <label>
          Email:
          <input type="email" />
        </label>
        
        <label>
          Message:
          <textarea></textarea>
        </label>
        
        <button type="submit">Send</button>
      </form>

    </section>
  );
}

export default Contact;