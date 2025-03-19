import React, { useState } from 'react';
// import from the css file
// import { Link } from 'react-router-dom'; is this still needed?**

function Contact() {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputType);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

}

