import React, { useContext } from "react";
import './Contact.css'
import { MyContext } from "../App";
const Contact = () => {

const context =useContext(MyContext)
  return (
    <div className="contact" style={context.theme}>
      <h1>You can mail me help@geekster.in</h1>
    </div>
  );
};

export default Contact;
