import React from 'react'
import { useLocation } from 'react-router-dom';
import "../Styling/Customer.css";


function Scrutiny() {
  const location = useLocation();
  const { data } = location.state;

  const handleAccept = () => {
    alert("Customer Accepted");
  }
  const handleReject = () => {
    alert("Customer Rejected");
  }

  return (
    <div className='display'>
    <div className='customer_info'>
        <h1>Customer Information</h1>
        <div className='data'>
            <div className='elem'>
                <p className='p'>Account Open: {data.formData.account}</p>
                <p className='p'>Currency: {data.formData.currency}</p>
            </div>
            <div className='elem'>
                <p className='p'>First Name: {data.formData.firstName}</p>
                <p className='p'>Last Name: {data.formData.lastName}</p>
            </div>
            <div className='elem'>
                <p className='p'>Mobile No: {data.formData.mobileno}</p>
                <p className='p'>Email: {data.formData.email}</p>
            </div>
            <div className="elem">
                <p className='p'>Street Address: {data.formData.street}</p>
                <p className='p'>City: {data.formData.city}</p>
            </div>
            <div className="elem">
                <p className='p'>State: {data.formData.state}</p>
                <p className='p'>Postal Code: {data.formData.postal}</p>
            </div>
            <div className="elem">
                <p className='p'>DOB: {data.formData.dob}</p>
                <p className='p'>Marital Status: {data.formData.maritalStatus}</p>
            </div>
            <div className="elem">
                <p className='p'>Occupation: {data.formData.occupation}</p>
                <p className='p'>Current Income: {data.formData.monthlyIncome}</p>
            </div>
            <div className='comments'>
              <p id='data_comment' className='p'>Comments: {data.comment}</p>
            </div>
            <div className='button'>
                <button id="reject" onClick={handleReject}>Reject</button>
                <button id='accept' onClick={handleAccept}>Accept</button>
            </div>
        </div>
    </div>
</div>
  )
}
export default Scrutiny;
