import React, { useState } from 'react';
// import from the css file
// import { Link } from 'react-router-dom'; is this still needed?**

// Here the state variables for each field in the form are set -- each value is set to an empty string
function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Depending on the input type, either email, username, and message is set
        if (inputType === 'email') {
            setEmail(inputType);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    // Prevents the default behavior of the webpage refreshing after form submittal
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // This addresses whether or not the email is valid -- otherwise an error occurs
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or Name is invalid');
            return;
        }
        if (!setMessage(message)) {
            setErrorMessage(`Message is required.`);
            return;
        }
        // Once submission is done correctly, the inputs are cleared
        setUserName('');
        setMessage('');
        setEmail('');
    };

    return (
        <section id='contact-me' className='contact'>
            <div className='flex-row'>
                <h2 className='section-title secondary-border'>Contact Me</h2>
            </div>

            <div className='contact-info'>
                <div>
                    <h3>Hello {userName}</h3>
                    <p>Would you like to get in contact?</p>
                    E:{''}
                    <a href='mailto://fischer.almanza@gmail.com'>
                        fischer.almanza@gmail.com
                    </a>
                    <p>
                        <strong>Any and all feedback is most welcome!</strong>
                    </p>
                </div>
                {/* contact form is handled now */}
                <div className='contact-form'>
                    <h3>Contact Me</h3>
                    <form className='form'>
                        {/* Name */}
                        <label for='contact-name'>Your Name</label>
                        <input
                            value={userName}
                            name='userName'
                            onChange={handleInputChange}
                            type='text'
                            id='contact-name'
                            placeholder='Your Name'
                        />
                        {/* Email */}
                        <label for='contact-email'>Your Email</label>
                        <input
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                            id='contact-email'
                            placeholder='Your Email'
                        />
                        {/* Message */}
                        <label for='contact-message'>Message</label>
                        <textarea
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            type='message'
                            id='contact-message'
                            placeholder='Your Message'
                        />
                        <button type='button' onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;