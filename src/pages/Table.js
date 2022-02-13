import React, {useContext} from 'react'
import {globalFormState} from '../component/Layout'
const Table = () => {
    const submitData = useContext(globalFormState);
    return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone number</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
      {
          submitData?.map(({firstName, lastName, email, phoneNumber, message}) => (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{message}</td>
            </tr>
          )
          )
      }
  </tbody>
</table>
    )
}

export default Table

