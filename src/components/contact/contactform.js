import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name.length <= 3 || formData.name.length >= 25) {
            alert("Name should be between 3 and 25 characters.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!formData.phone.match(/^\d{10}$/)) {
            alert("Please enter a valid phone number with 10 digits.");
            return;
        }

        // Process form data
        console.log(formData);
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} value={formData.phone} />
            <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} value={formData.subject} />
            <textarea name="message" placeholder="Message" required onChange={handleChange} value={formData.message}></textarea>
            <div className="form-buttons">
                <button type="reset" onClick={handleReset}>Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
