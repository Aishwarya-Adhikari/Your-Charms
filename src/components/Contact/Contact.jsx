import React from "react";
import "../css/Contact.css";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h2>Contact Us  </h2>
            <form  className="contact-page">
               <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email address"/> 
                <textarea placeholder="Enter your message"></textarea>
                <button type="submit">Send Message</button>
            
            </form>
        </div>
    );
};

export default ContactPage;

