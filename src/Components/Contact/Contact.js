import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Contact.css";
import ContactCard from "./ContactCard";

function Contact() {
  const [pass, setPass] = useState("hii");
  const history = useHistory();

  useEffect(() => {
    if (pass === "332023") {
      history.push("/users");
    }
  }, [pass]);

  const toUser = () => {
    // console.log(pass);
    setPass(prompt("Enter the passcode"));
  };
  return (
    <div className="contact">
      <Header />
      <ContactCard />

      <Footer />
    </div>
  );
}

export default Contact;
