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
                    <h3>.................</h3>
                </div>
            </div>
        </section>
    )

}

