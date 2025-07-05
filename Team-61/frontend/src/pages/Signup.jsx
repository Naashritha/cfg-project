import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess, initiateGoogleAuth } from '../utils';
import {
  Typography,
  TextField,
  Button,
  Box,
  Link as MuiLink,
  Grid,
  CssBaseline,
  Paper,
  InputAdornment,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const defaultTheme = createTheme();

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        level: 0,
        label: 'Weak',
        color: 'error'
    });
    const [passwordChecks, setPasswordChecks] = useState({
        length: false,
        hasNumber: false,
        hasSpecialChar: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (signupInfo.password) {
            checkPasswordStrength(signupInfo.password);
        } else {
            setPasswordStrength({
                level: 0,
                label: 'Weak',
                color: 'error'
            });
            setPasswordChecks({
                length: false,
                hasNumber: false,
                hasSpecialChar: false
            });
        }
    }, [signupInfo.password]);

    const checkPasswordStrength = (password) => {
        const checks = {
            length: password.length > 4,
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        setPasswordChecks(checks);

        const passedChecks = Object.values(checks).filter(Boolean).length;

        let strength = {
            level: 0,
            label: 'Weak',
            color: 'error'
        };

        switch (passedChecks) {
            case 1:
                strength = {
                    level: 33,
                    label: 'Decent',
                    color: 'warning'
                };
                break;
            case 2:
                strength = {
                    level: 66,
                    label: 'Good',
                    color: 'info'
                };
                break;
            case 3:
                strength = {
                    level: 100,
                    label: 'Excellent',
                    color: 'success'
                };
                break;
            default:
                strength = {
                    level: 0,
                    label: 'Weak',
                    color: 'error'
                };
        }

        setPasswordStrength(strength);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `${import.meta.env.VITE_API_URL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{
                minHeight: '100vh',
                minWidth: '60vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgb(218, 245, 255)'
            }}>
                <Paper elevation={6} sx={{ display: 'flex', width: '60%', height: '720px', borderRadius: 8, overflow: 'hidden' }}>
                    <Box sx={{ 
                        flex: 1, 
                        width: '50%',
                        position: 'relative', 
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            zIndex: 1,
                        }
                    }}>
                        <img
                            src="/src/assets/login-image.png"
                            alt="Lovebird"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1, width: '50%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Box sx={{ p: 4.8, pt: 0 }}>
                            <Typography 
                                component="h1" 
                                variant="h3" 
                                sx={{ 
                                    mt: 0, 
                                    mb: 2, 
                                    textAlign: 'center',
                                    fontFamily: '"Dancing Script", cursive',
                                    fontWeight: 700,
                                    fontSize: '2.8rem'
                                }}
                            >
                                Give India Foundation
                            </Typography>
                            <Typography 
                                component="h1" 
                                variant="h5" 
                                sx={{ 
                                    mb: 5, 
                                    textAlign: 'center',
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 400,
                                    fontSize: '1.2rem'
                                }}
                            >
                                A company of love
                            </Typography>
                            <Box component="form" onSubmit={handleSignup} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={signupInfo.name}
                                    onChange={handleChange}
                                    variant="standard"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '0.85rem', 
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.85rem',
                                        },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0, 0, 0, 0.42)' },
                                        '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(0, 0, 0, 0.87)' },
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={signupInfo.email}
                                    onChange={handleChange}
                                    variant="standard"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '0.85rem', 
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.85rem',
                                        },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0, 0, 0, 0.42)' },
                                        '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(0, 0, 0, 0.87)' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="email"
                                                    edge="end"
                                                >
                                                    <EmailIcon fontSize="small" />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={signupInfo.password}
                                    onChange={handleChange}
                                    variant="standard"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '0.85rem',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.85rem',
                                        },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0, 0, 0, 0.42)' },
                                        '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(0, 0, 0, 0.87)' },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Box sx={{ width: '100%', mt: 4, mb: 2 }}>
                                    <LinearProgress 
                                        variant="determinate" 
                                        value={passwordStrength.level} 
                                        color={passwordStrength.color}
                                        sx={{ height: 6, borderRadius: 3, mb: 1 }}
                                    />
                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                                        Password Strength: {passwordStrength.label}
                                    </Typography>
                                    <List dense sx={{ py: 0 }}>
                                        <ListItem sx={{ p: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                {passwordChecks.length ? <CheckIcon color="success" fontSize="small" /> : <CloseIcon color="error" fontSize="small" />}
                                            </ListItemIcon>
                                            <ListItemText primary="Must be longer than 4 characters" />
                                        </ListItem>
                                        <ListItem sx={{ p: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                {passwordChecks.hasNumber ? <CheckIcon color="success" fontSize="small" /> : <CloseIcon color="error" fontSize="small" />}
                                            </ListItemIcon>
                                            <ListItemText primary="Must include at least one number" />
                                        </ListItem>
                                        <ListItem sx={{ p: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                {passwordChecks.hasSpecialChar ? <CheckIcon color="success" fontSize="small" /> : <CloseIcon color="error" fontSize="small" />}
                                            </ListItemIcon>
                                            <ListItemText primary="Must include at least one special character" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center', mt: 4, mb: 4 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ borderRadius: 10, px: 3, py: 1.2, fontSize: '0.72rem', flex: 1 }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Button
                                        sx={{ 
                                            borderRadius: 5, 
                                            px: 3,
                                            py: 1.2,
                                            fontSize: '0.72rem',
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                        startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="google logo" style={{ width: 20 }} />}
                                        onClick={initiateGoogleAuth}
                                    >
                                        Sign up with Google
                                    </Button>
                                </Box>
                                
                                <Grid container justifyContent="center" sx={{ mt: 1 }}>
                                    <Grid item sx={{ fontSize: '0.85rem' }} >
                                    Already have an account?{' '}
                                    <MuiLink component={Link} to="/login" >
                                        Login
                                    </MuiLink>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <ToastContainer />
            </Box>
        </ThemeProvider>
    )
}

export default Signup