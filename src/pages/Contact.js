import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import Button from '../component/Button';
import Swal from 'sweetalert2'


const CONTACT_URL = "https://ourcontactform.herokuapp.com/api/v1/contact";

const Contact = () => {
    const first_nameRef = useRef();
    const last_nameRef = useRef();
    const emailRef = useRef();
    const phone_numberRef = useRef();
    const messageRef = useRef();
    const errRef = useRef();

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        first_nameRef.current.focus();
    }, [])


    useEffect(() => {
        setErrMsg('');
    }, [first_name, last_name, email, phone_number, message])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

    try {
        const response = await axios.post(CONTACT_URL, 
            JSON.stringify({first_name, last_name, email, phone_number, message}),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(false)
            console.log(JSON.stringify(response))
            setFirstName("")
            setLastName("")
            setPhoneNumber("")
            setEmail("")
            setMessage("")
            Swal.fire(
                'Good job!',
                'Message sent successfully. We will get back to you.',
                'success'
              )
    } catch(err) {
        setIsLoading(false)
        if (!err?.response) {
            setErrMsg('No server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Kindly enter your details in the fields below!');
        } else {
            setErrMsg('Something went wrong! Please try again.');
        }
        errRef.current.focus();
    }
}

    return (
        <>
        <div>
        <div className = "box"style = {{ height: "200px", marginTop: "60px", backgroundColor: "#4c6b9f" } }>

        <h2 style={{ fontSize: "40px", color: "#fff", textAlign: "center", padding: "60px" } } > PLEASE ENTER DETAILS BELOW </h2>

        </div> 
        <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
        <form className = "container mb-5 mt-5" onSubmit={handleSubmit}>
        <div className = "mb-3">
        <label htmlFor = "exampleFormControlInput1" className = "form-label" > First Name </label> 
        <input type = "text" ref={first_nameRef} autoComplete="off"
        className = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter firstname"
        value = { first_name } onChange={(e) =>setFirstName(e.target.value)}
        name = 'firstName' />
        </div> 
        <div className="mb-3">
        <label
        htmlFor = "exampleFormControlInput1"
        className = "form-label" > Last Name </label> 
        <input type = "text" ref={last_nameRef} autoComplete="off"
        className = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter lastname"
        onChange={(e) =>setLastName(e.target.value)}
        value = { last_name }
        name = 'lastName' />
        </div> 
        <div className = "mb-3" >
        <label
        htmlFor = "exampleFormControlInput1"
        className = "form-label" > Email address </label> 
        <input type = "email" ref={emailRef} autoComplete="off"
        className = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "name@example.com"
        onChange={(e) =>setEmail(e.target.value)}
        value = { email }
        name = 'email' />
        </div> 
        <div className = "mb-3" >
        <label
        htmlFor = "exampleFormControlInput1"
        className = "form-label" > Phone number </label>
        <input type = "tel" ref={phone_numberRef} autoComplete="off"
        className = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter mobile number with area code"
        onChange={(e) =>setPhoneNumber(e.target.value)}
        value = { phone_number }
        name = 'phoneNumber' />
        </div> 
        <div className = "mb-3" >
        <label
        htmlFor = "exampleFormControlTextarea1"
        className = "form-label" > Message </label> 
        <textarea className = "form-control" ref={messageRef} autoComplete="off"
        id = "exampleFormControlTextarea1"
        rows = "3"
        onChange={(e) =>setMessage(e.target.value)}
        value = { message }
        name = 'message' > </textarea> 
        </div> 
        <Button disabled={isLoading} width="120px" text="Submit" backgroundColor="blue" color="#fff" /> </form> 
        </div>
        </>
    )
}

export default Contact