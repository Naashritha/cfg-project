import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import MyForm from '../components/MyForm';

function Page03() {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState('');
    const [showForm, setShowForm] = useState(false);
        
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <div>
            <TopBar />
            <Navbar />
            <h1>Welcome to Page 03, {loggedInUser}</h1>
            <p>This is Page 03 content</p>
            <button 
                className="create-button" 
                onClick={() => setShowForm(true)}
            >
                Create
            </button>
            
            {showForm && (
                <MyForm onClose={() => setShowForm(false)} />
            )}

            <ToastContainer />
        </div>
    );
}

export default Page03;