// import React from 'react'
// import "./Contact.css"
// const Contact = () => {
//     return (
//         <div className="c">
//              <div className="c-bg">
//                  <div className="c-wrapper">
//                      <div className="c-left">
//                          <h1 className="c-title">
                              
//                          </h1>
//                      </div>
//                      <div className="c-right"></div>
//                  </div>
//              </div>
//         </div>
//     )
// }

// export default Contact
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_50tar3h",
        "template_upsgq7o",
        formRef.current,
        "user_flgu0ybNFPZKeAzyvxPi4"
      )
      .then(
        (result) => {
          console.log(result.text);
            setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9800258190
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              rohitsaha372@gmail.com
              rs.19u10038@btech.nitdgp.ac.in
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
             Durgapur -12 , West Bengal , INDIA
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What do you like the most/the least about my website?</b> Let me know in the email below. Always available for
            freelancing work.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
            //   style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
            //   style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
            //   style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
            //   style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "    Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
