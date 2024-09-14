import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'

const BusinessRegistration = () => {
    const [formData, setFormData] = useState({
        businessOwnerName: '',
        businessName: '',
        businessType: '',
        businessIdea: '',
        businessDescription: '',
        email: '',
        whatsappPhoneNumber: '',
        country: 'Nigeria',
        role: 'Business',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', formData);
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (

        <main>
            <form onSubmit={handleSubmit}>
                <input name="businessOwnerName" onChange={handleChange} placeholder="Business Owner Name" />
                <input name="businessName" onChange={handleChange} placeholder="Business Name" />
                <input name="businessType" onChange={handleChange} placeholder="Business Type" />
                <textarea name="businessIdea" onChange={handleChange} placeholder="Business Idea"></textarea>
                <textarea name="businessDescription" onChange={handleChange} placeholder="Business Description"></textarea>
                <input name="email" onChange={handleChange} placeholder="Email" />
                <input name="whatsappPhoneNumber" onChange={handleChange} placeholder="WhatsApp Phone Number" />
                <button type="submit">Register</button>
            </form>

            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <div class="infield">
                            <input type="text" placeholder="Name" />
                            <label></label>
                        </div>
                        <div class="infield">
                            <input type="email" placeholder="Email" name="email" />
                            <label></label>
                        </div>
                        <div class="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <div class="infield">
                            <input type="email" placeholder="Email" name="email" />
                            <label></label>
                        </div>
                        <div class="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <a href="#" class="forgot">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container" id="overlayCon">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <button id="overlayBtn"></button>
                </div>
            </div>
        </main>
    );
};

export default BusinessRegistration;
