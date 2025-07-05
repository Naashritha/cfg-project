import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';

function Page05() {
    const navigate = useNavigate();
        
    const [loggedInUser, setLoggedInUser] = useState('');
        
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <div>
            <TopBar />
            <Navbar />
            <h1>Welcome to Page 05, {loggedInUser}</h1>
            <p>This is Page 05 content</p>
        </div>
    );
}

export default Page05;