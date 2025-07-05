import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import TableView from '../components/TableView';

function Page04() {
    const navigate = useNavigate();
        
    const [loggedInUser, setLoggedInUser] = useState('');
        
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <div>
            <TopBar />
            <Navbar />
            {/* <h1>Welcome to Page 04, {loggedInUser}</h1> */}
            <TableView />
        </div>
    );
}

export default Page04;