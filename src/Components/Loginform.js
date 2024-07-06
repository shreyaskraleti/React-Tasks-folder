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
        console.log('Form data submitted:', formData);
    }

        return (
            <>
               
        
               <form className="Loginform" onSubmit={handleSubmit} >
        
               <h2>Create a new account</h2> 
               <p className="sent">It's quick and easy.</p>
        
               <div className="form-group">
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
        
               <div className="form-group name-group">
               <div className="name-field">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="name-field">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    </div>

                    <div className="form-group">
    <label>Gender:</label>
    <div className="gender-options">
        <label>Female
            <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
            />
        </label>
        <label>Male
            <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
            />
        </label>
        <label>Custom
            <input
                type="radio"
                name="gender"
                value="custom"
                checked={formData.gender === 'custom'}
                onChange={handleChange}
            />
        </label>
    </div>
</div>

        
                    
                        
                    
                    <p className="Para-1">People who use our service may have uploaded your contact information to Achievers it. Learn more.</p>
                    <p className="Para-2">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    
                    <button type="submit" className="submit-button">Sign Up</button>
                    <p>Already have an account?</p>
                    
                    </form>
                    </>
                    )
                }
                
                export default Loginform;