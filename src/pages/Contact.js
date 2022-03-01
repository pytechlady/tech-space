import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Button from "../component/Button";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const PHONE_REGEX = /^[0-9]{11,20}$/;
const CONTACT_URL = "https://ourcontactform.herokuapp.com/api/v1/contact";

const Contact = () => {
  const first_nameRef = useRef();
  const last_nameRef = useRef();
  const emailRef = useRef();
  const phone_numberRef = useRef();
  const messageRef = useRef();
  const errRef = useRef();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [validFirstName, setValidFirstName] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validLastName, setValidLastName] = useState(false);

  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  useEffect(() => {
    first_nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USERNAME_REGEX.test(first_name);
    setValidFirstName(result);
}, [first_name])

useEffect(() => {
    const result = USERNAME_REGEX.test(last_name);
    setValidLastName(result);
}, [last_name])

useEffect(() => {
    const result = PHONE_REGEX.test(phone_number);
    setValidPhoneNumber(result);
}, [phone_number])

  useEffect(() => {
    setErrMsg("");
  }, [first_name, last_name, email, phone_number, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(first_name);
    const v2 = USERNAME_REGEX.test(last_name);
    const v3 = PHONE_REGEX.test(phone_number);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }

    setLoading(true);
    try {
      const response = await axios.post(
        CONTACT_URL,
        JSON.stringify({ first_name, last_name, email, phone_number, message }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      console.log(JSON.stringify(response));
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
      Swal.fire(
        "Good job!",
        "Message sent successfully. We will get back to you.",
        "success"
      );
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Ooops! Our server is currently down. Please try again later.");
      } else if (err.response?.status === 400) {
        setErrMsg("Kindly enter your details in the fields below!");
      } else {
        setErrMsg("Ooops! Something went wrong! Please try again.");
      }
      errRef.current.focus();
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <div
          className="box"
          style={{
            height: "200px",
            marginTop: "60px",
            backgroundColor: "green",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              color: "#fff",
              textAlign: "center",
              padding: "60px",
            }}
          >
            {" "}
            PLEASE ENTER DETAILS BELOW{" "}
          </h2>
        </div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form className="container mb-5 mt-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {" "}
              First Name{" "}
              <span className={validFirstName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validFirstName || !first_name ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
            </label>
            
            <input
              type="text"
              ref={first_nameRef}
              autoComplete="off"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter firstname"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName" 
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}/>
              <p id="uidnote" className={firstNameFocus && first_name && !validFirstName ? "instructions" : "offscreen"}>
                         <FontAwesomeIcon icon={faInfoCircle} />
                         Please enter your first name
                     </p>
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {" "}
              Last Name{" "}
              <span className={validLastName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validLastName || !last_name ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
            </label>
            <input
              type="text"
              ref={last_nameRef}
              autoComplete="off"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter lastname"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
              name="lastName"
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
            />
            <p id="uidnote" className={lastNameFocus && last_name && !validLastName ? "instructions" : "offscreen"}>
                         <FontAwesomeIcon icon={faInfoCircle} />
                         Please enter your last name
                     </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {" "}
              Email address{" "}
            </label>
            <input
              type="email"
              ref={emailRef}
              autoComplete="off"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {" "}
              Phone number{" "}
              <span className={validPhoneNumber ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPhoneNumber || !phone_number ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
            </label>
            <input
              type="tel"
              ref={phone_numberRef}
              autoComplete="off"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter mobile number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phone_number}
              name="phoneNumber"
              onFocus={() => setPhoneNumberFocus(true)}
              onBlur={() => setPhoneNumberFocus(false)}
            />
             <p id="uidnote" className={phoneNumberFocus && phone_number && !validPhoneNumber ? "instructions" : "offscreen"}>
                         <FontAwesomeIcon icon={faInfoCircle} />
                         Please enter a valid mobile number. Only numbers allowed.
                     </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {" "}
              Message{" "}
            </label>
            <textarea
              className="form-control"
              ref={messageRef}
              autoComplete="off"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
            >
              {" "}
            </textarea>
          </div>
          <Button
            disabled={loading}
            width="120px"
            text={loading ? "loading": "Submit"}
            backgroundColor="blue"
            color="#fff"
          />{" "}
        </form>
      </div>
    </>
  );
};

export default Contact;
