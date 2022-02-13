import React from 'react'

const Contact = ({ handleChange, firstName, lastName, email, phoneNumber, message, handleSubmit }) => {
    return (
        <>
        <div className = "box"style = {{ height: "200px", marginTop: "60px", backgroundColor: "#4c6b9f" } }>

        <h2 style={{ fontSize: "40px", color: "#fff", textAlign: "center", padding: "60px" } } > PLEASE ENTER DETAILS BELOW </h2>

        </div> 
        <form className = "container mb-5 mt-5" onChange = {(e) => handleChange(e) }>
        <div className = "mb-3">
        <label htmlFor = "exampleFormControlInput1"class = "form-label" > First Name </label> 
        <input type = "text"
        class = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter firstname"
        value = { firstName }
        name = 'firstName' />
        </div> 
        <div class = "mb-3">
        <label
        htmlFor = "exampleFormControlInput1"
        class = "form-label" > Last Name </label> 
        <input type = "text"
        class = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter lastname"
        onChange = { handleChange }
        value = { lastName }
        name = 'lastName' />
        </div> 
        <div class = "mb-3" >
        <label
        htmlFor = "exampleFormControlInput1"
        class = "form-label" > Email address </label> 
        <input type = "email"
        class = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "name@example.com"
        onChange = { handleChange }
        value = { email }
        name = 'email' />
        </div> 
        <div class = "mb-3" >
        <label
        htmlFor = "exampleFormControlInput1"
        class = "form-label" > Phone number </label>
        <input type = "tel"
        class = "form-control"
        id = "exampleFormControlInput1"
        placeholder = "enter mobile number with area code"
        onChange = { handleChange }
        value = { phoneNumber }
        name = 'phoneNumber' />
        </div> 
        <div class = "mb-3" >
        <label
        htmlFor = "exampleFormControlTextarea1"
        class = "form-label" > Message </label> 
        <textarea class = "form-control"
        id = "exampleFormControlTextarea1"
        rows = "3"
        onChange = { handleChange }
        value = { message }
        name = 'message' > </textarea> 
        </div> 
        <button style = {{ width: "120px" } }
        type = "submit"
        class = "btn btn-primary mt-3"
        onClick = { handleSubmit } > Submit </button> </form> 
        </>
    )
}

export default Contact