import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

function GoogleAuthHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get('token');
        const name = query.get('name');
        const email = query.get('email');

        if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('loggedInUser', name);
            handleSuccess('Google login successful');
            navigate('/home');
        } else {
            navigate('/login');
        }
    }, [location, navigate]);

    return <div>Processing Google login...</div>;
}

export default GoogleAuthHandler;