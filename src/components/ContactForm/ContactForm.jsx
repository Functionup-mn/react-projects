import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("nadeem");
  const [email, setEmail] = useState("namsgmail.com");
  const [text, setText] = useState("hi how r u");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(name, email, text);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA CALL"
          icon={<HiMail fontSize={"24px"} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows={8} />
          </div>

          <div className={styles.submit_btn}>
            <Button text="submit" />
          </div>
          <div>{name + "   " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/contact.svg" alt="contact-logo" />
      </div>
    </section>
  );
};

export default ContactForm;
