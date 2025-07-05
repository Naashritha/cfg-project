import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Camera from '../components/Camera';
import { ToastContainer } from 'react-toastify';

function Page02() {
    const navigate = useNavigate();
        
    const [loggedInUser, setLoggedInUser] = useState('');
        
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <div>
            <TopBar />
            <Navbar />
            <h1>Welcome to Page 02, {loggedInUser}</h1>
            <p>This is Page 02 content</p>
             <Camera />
             <ToastContainer />
        </div>
    );
}

export default Page02;