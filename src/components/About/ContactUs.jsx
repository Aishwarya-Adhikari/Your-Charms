import React from "react";
import "../css/Contact.css";

const ContactUs = () => {
    return (
        <div className="contact-page">
          <div className= "contact-box">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email"/>
                <textarea placeholder="Enter your message"></textarea>
                <button type="submit">Send</button>
            
            </form>
          </div>
        </div>
    );
};

export default ContactUs;

