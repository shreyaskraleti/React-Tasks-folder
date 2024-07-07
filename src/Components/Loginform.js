import React, { useState } from 'react';
import "./Loginform.css";

function Loginform() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        dateOfBirth: '',
        firstName: '',
        surname: '',
        gender: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '' // Clear the error for the field when user starts typing
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.surname) newErrors.surname = 'Surname is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Form data submitted:', formData);
    };

    return (
        <div className='outline'>
            <form className="Loginform" onSubmit={handleSubmit}>
                <div className="header-container">
                    <h2>Create a new account</h2>
                    <p className="sent">It's quick and easy.</p>
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Mobile number or email address"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-symbol">!</span>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="New password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-symbol">!</span>}
                </div>

                <div className="form-group">
                    <label>Date of birth: </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={errors.dateOfBirth ? 'error' : ''}
                    />
                    {errors.dateOfBirth && <span className="error-symbol">!</span>}
                </div>

                <div className="form-group name-group">
                    <div className="name-field">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'error' : ''}
                        />
                        {errors.firstName && <span className="error-symbol">!</span>}
                    </div>

                    <div className="name-field">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className={errors.surname ? 'error' : ''}
                        />
                        {errors.surname && <span className="error-symbol">!</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="gender-options">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                className={errors.gender ? 'error' : ''}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                className={errors.gender ? 'error' : ''}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="custom"
                                checked={formData.gender === 'custom'}
                                onChange={handleChange}
                                className={errors.gender ? 'error' : ''}
                            />
                            Custom
                        </label>
                        {errors.gender && <span className="error-symbol">!</span>}
                    </div>
                </div>

                <p className="Para-1">People who use our service may have uploaded your contact information to Achievers. Learn more.</p>
                <p className="Para-2">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

                <button type="submit" className="submit-button">Sign Up</button>
                <p>Already have an account?</p>
            </form>
        </div>
    );
}

export default Loginform;
