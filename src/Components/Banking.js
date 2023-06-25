import React from 'react'
import "../Styling/Banking.css";
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Banking() {
    const [formData, setFormData] = useState({
        account: "Current Account",
        currency: "",
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        street: "",
        city: "",
        state: "",
        postal: "",
        dob: "",
        maritalStatus: "Single",
        occupation: "",
        monthlyIncome: "",
        agree: false,
        upload: null,
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        navigate('/customerinfo', { state: { formData } });
    };


    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'file' ? files[0] : fieldValue,
        }));
      };

    return (
        <div className='main'>
            <div className='information'>
            <h1>Bank Account Registration</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='account'>
                        <p>Select which type of account you want to open</p>
                        <select name="account" id="account" className='acctype' onChange={handleChange}
                            value={formData.account}>
                            <option value="current_account">Current Account</option>
                            <option value="Saving Account">Saving Account</option>
                            <option value="Salary Account">Salary Account</option>
                            <option value="Fixed Deposit">Fixed Deposit</option>
                        </select>
                    </div>

                    <div className='currency'>
                        <p>Choose Currency:</p>
                        <div className='curr'>
                            <input type="radio" id="usd" name="currency" 
                            value="USD" checked={formData.currency === "USD"} onChange={handleChange}
                            />
                            <label htmlFor="usd">USD</label>
                            <input type="radio" id="pkr" name="currency" 
                            value="PKR" checked={formData.currency === "PKR"} onChange={handleChange} />
                            <label htmlFor="pkr">PKR</label>
                        </div>
                    </div>

                    <div className='name'>
                        <p>Name</p>
                        <div className='section2'>
                            <input type="text" name="firstName" id="fname" placeholder='First Name' className='section'
                                onChange={handleChange} value={formData.firstName}
                            />
                            <input type="text" name="lastName" id="lname" placeholder='Last Name' className='section'
                                onChange={handleChange} value={formData.lastName}
                            />
                        </div>
                    </div>

                    <div className='contact'>
                        <p>Contact</p>
                        <div className='section2'>
                            <input type="text" name="mobileNo" id="mobileno" placeholder='Mobile No' className='section'
                                onChange={handleChange} value={formData.mobileNo}
                            />
                            <input type="text" name="email" id="email" placeholder='Email' className='section'
                                onChange={handleChange} value={formData.email}
                            />
                        </div>
                    </div>

                    <div className='address'>
                        <p>Mailing Home Address</p>
                        <div className='section2'>
                            <input type="text" name="street" id="street" placeholder='Street Adress' className='section'
                                onChange={handleChange} value={formData.street} />
                            <input type="text" name="city" id="city" placeholder='City' className='section'
                                onChange={handleChange} value={formData.city} />
                        </div>
                        <div className='section2'>
                             <input type="text" name="state" id="state" placeholder='province ' className='section'
                                onChange={handleChange} value={formData.state} />
                            <input type="text" name="postal" id="postal" placeholder='Postal Zip Code' className='section'
                                onChange={handleChange} value={formData.postal} />
                        </div>
                    </div>

                    <div className='dob_status'>
                        <div className='elem2'>
                            <p>DOB</p>
                            <input type="date" name="dob" id="dob" className='section'
                                onChange={handleChange} value={formData.dob}
                            />
                        </div>
                        <div className="elem2">
                            <p>Marital Status</p>
                            <select name="maritalStatus" id="status" className="section"
                                onChange={handleChange} value={formData.maritalStatus} >
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>

                    <div className='work'>
                        <div className='occupation'>
                            <p>Occupation</p>
                            <input type="text" name="occupation" id="exp" className='section' placeholder='-'
                                onChange={handleChange} value={formData.occupation}
                            />
                        </div>
                        <div className='income'>
                            <p>Monthly Income</p>
                            <input type="text" name="monthlyIncome" id="income" className='section' placeholder='-'
                                onChange={handleChange} value={formData.monthlyIncome}
                            />
                        </div>
                    </div>

                    <div className="other">
                        <input type="file" name="upload" id="upload" className='section'
                            onChange={handleChange} 
                        />
                    </div>

                    <div className='auth'>
                        <p>By completing this account registration form, you agree to the terms
                            and conditions that govern your account and your relationship with the bank.
                        </p>
                        <p>Please check the box below to confirm the agreement before sending
                            the bank account registration information.
                        </p>
                        <div className='section2'>
                            <input type="radio" name="agree" id="agree"
                                onChange={handleChange} checked={formData.agree} />
                            <label htmlFor="agree">I agree to the terms of service</label>
                        </div>
                    </div>

                    <div className='submit'>
                        <button className='btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Banking;
