import React, { useState } from 'react';

function HookForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({}); // To hold validation messages

    return (
        <div>
            <form>
                {/* Input fields will go here */}
            </form>
        </div>
    );
}

export default HookForm;
const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]: value
    });

    let errorMessages = { ...errors };

    // Validation logic for each field
    if (name === 'firstName' && value.length > 0) {
        errorMessages.firstName = value.length < 2 ? 'First Name must be at least 2 characters' : '';
    }
    
    if (name === 'lastName' && value.length > 0) {
        errorMessages.lastName = value.length < 2 ? 'Last Name must be at least 2 characters' : '';
    }
    
    if (name === 'email' && value.length > 0) {
        errorMessages.email = value.length < 5 ? 'Email must be at least 5 characters' : '';
    }
    
    if (name === 'password' && value.length > 0) {
        errorMessages.password = value.length < 8 ? 'Password must be at least 8 characters' : '';
    }
    
    if (name === 'confirmPassword' && value.length > 0) {
        errorMessages.confirmPassword = value !== form.password ? 'Passwords must match' : '';
    }

    setErrors(errorMessages);
};
return (
    <div>
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleChange} value={form.firstName} />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>

            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={handleChange} value={form.lastName} />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>

            <div>
                <label>Email: </label>
                <input type="email" name="email" onChange={handleChange} value={form.email} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={handleChange} value={form.password} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={handleChange} value={form.confirmPassword} />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>
        </form>
    </div>
);
