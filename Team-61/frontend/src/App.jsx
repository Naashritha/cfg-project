import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import Page03 from './pages/Page03';
import Page04 from './pages/Page04';
import Page05 from './pages/Page05';
import { useState, useEffect } from 'react';
import RefreshHandler from './RefreshHandler';
import GoogleAuthHandler from './shared/GoogleAuthHandler';
import VolunteerForm from './pages/volunteerForm';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Get user role from localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  // Role-based dashboard component
  const getDashboardComponent = () => {
    switch (userRole) {
      case 'student':
        return <StudentDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  const PublicRoute = ({ element }) => {
    return !isAuthenticated ? element : <Navigate to="/dashboard" />;
  };

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<PublicRoute element={<Signup />} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/page01' element={<PrivateRoute element={<Page01 />} />} />
        <Route path='/page02' element={<PrivateRoute element={<Page02 />} />} />
        <Route path='/page03' element={<PrivateRoute element={<Page03 />} />} />
        <Route path='/page04' element={<Page04 />} />
        <Route path='/page05' element={<PrivateRoute element={<Page05 />} />} />
        <Route path='/auth/google/callback' element={<GoogleAuthHandler />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/dashboard" element={<PrivateRoute element={getDashboardComponent()} />} />
      </Routes>
    </div>
  );
}

export default App;