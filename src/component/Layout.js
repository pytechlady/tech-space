import {createContext, useState} from 'react'; 
import Table from '../pages/Table'
import Contact from '../pages/Contact'

  export const globalFormState = createContext(null);

  function Layout() {
    const [contact, setContact] = useState(
      {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      }
    );
  
    const [submit, setSubmit] = useState([]);
  
  let {firstName, lastName, email, phoneNumber, message} = contact
  
  const handleChange = (e) => {
    const getValue = {...contact}
    getValue[e.target.name] = e.target.value
  
    setContact(getValue)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit (
      [
        {
          ...contact,
  
        },
        ...submit,
      ]
    )
  
    setContact(
      {
        ...contact,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      }
    )
  };
  return (
    <div className="Layout">
      <Contact handleChange={handleChange} handleSubmit={handleSubmit} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} message={message}/>
      <globalFormState.Provider value={submit}>
        <Table/>
      </globalFormState.Provider>
      
    </div>
  );
}

export default Layout;