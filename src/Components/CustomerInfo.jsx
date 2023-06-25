import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../Styling/Customer.css";
import { useNavigate } from 'react-router-dom';

function CustomerInfo() {
    const location = useLocation();
    const { formData } = location.state;
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
      };
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          formData,
          comment
        };
        navigate('/scrutiny', { state: { data } });
      };

    return (
        <div className='display'>
            <div className='customer_info'>
                <h1>Customer Information</h1>
                <form onSubmit={handleSubmit} className='data'>
                    <div className='elem'>
                        <p className='p'>Account Open: {formData.account}</p>
                        <p className='p'>Currency: {formData.currency}</p>
                    </div>
                    <div className='elem'>
                        <p className='p'>First Name: {formData.firstName}</p>
                        <p className='p'>Last Name: {formData.lastName}</p>
                    </div>
                    <div className='elem'>
                        <p className='p'>Mobile No: {formData.mobileno}</p>
                        <p className='p'>Email: {formData.email}</p>
                    </div>
                    <div className="elem">
                        <p className='p'>Street Address: {formData.street}</p>
                        <p className='p'>City: {formData.city}</p>
                    </div>
                    <div className="elem">
                        <p className='p'>State: {formData.state}</p>
                        <p className='p'>Postal Code: {formData.postal}</p>
                    </div>
                    <div className="elem">
                        <p className='p'>DOB: {formData.dob}</p>
                        <p className='p'>Marital Status: {formData.maritalStatus}</p>
                    </div>
                    <div className="elem">
                        <p className='p'>Occupation: {formData.occupation}</p>
                        <p className='p'>Current Income: {formData.monthlyIncome}</p>
                    </div>
                    <div className="comment">
                        <textarea name="comment" id="comment" cols="60" rows="4"
                        placeholder='Your Comments..' value={comment} onChange={handleCommentChange} ></textarea>
                    </div>
                    <div className='button'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CustomerInfo;
