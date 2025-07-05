import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefreshHandler({ setIsAuthenticated, setUserRole }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('userRole');
        setIsAuthenticated(!!token);
        if (role) setUserRole(role);
        
        // Array of protected paths (all except home, login, signup)
        const protectedPaths = ['/page01', '/page02', '/page03', '/page04', '/page05'];
        const publicPaths = ['/signup']; // Removed '/login' from here
        
        if (!token && protectedPaths.includes(location.pathname)) {
            navigate('/login', { replace: true });
        } else if (token && publicPaths.includes(location.pathname)) {
            navigate('/dashboard', { replace: true });
        }
    }, [location, navigate, setIsAuthenticated])

    return null;
}

export default RefreshHandler;