import React, {useState} from 'react';
import "./Loginform.css";

function Loginform() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        dateOfBirth: '',
        firstName: '',
        surname: '',
        gender: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:' formData);
    }

        return (
            <>
               
        
               <form className="Loginform" onSubmit={handleSubmit} >
        
               <h1>Create a new account</h1> 
               <h4>It's quick and easy.</h4>
        
               <div className="form-group">
               <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Mobile number or email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="form-group">
                    <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="New password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
            <label>Date of birth: </label>
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
            />
               </div>
        
               <div className="form-group">
               <label>FirstName:  </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="form-group">
                    <label>LastName:  </label>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            /> Female
                            <input
                                type="radio"
                                name="gender"
                                // value="male"
                                // onChange={handleChange}
                            /> Male
                            <input
                                type="radio"
                                name="gender"
                                // value="custom"
                                // onChange={handleChange}
                            /> Custom
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-button">Sign Up</button>
                    <p>Already have an account? <a href="https://mail.google.com/mail/u/0/#inbox">Login</a></p>
                    
                    </form>
                    </>
                    )
                }
                
                export default Loginform;