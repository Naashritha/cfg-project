import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Input,
    InputLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
    Stack,
    IconButton
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { handleError, handleSuccess } from '../utils';

const StyledBox = styled(Box)(({ theme }) => ({
    '&::-webkit-scrollbar': {
        width: '3px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main,
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.dark,
    },
}));

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const MyForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        age: 0,
        dob: '',
        gender: '',
        interests: [],
        city: '',
        customCity: '',
        file: null,
        image: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const cities = ['Mumbai', 'Hyderabad', 'Bangalore', 'Custom'];
    const interestOptions = ['football', 'cricket', 'chess', 'music', 'dance'];

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleInterestChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            let newInterests = [...prev.interests];
            if (checked) {
                newInterests.push(value);
            } else {
                newInterests = newInterests.filter(item => item !== value);
            }
            return {
                ...prev,
                interests: newInterests
            };
        });
    };

    const validateForm = () => {
        if (!formData.name) {
            handleError('Name is required');
            return false;
        }
        if (!formData.bio) {
            handleError('Bio is required');
            return false;
        }
        if (formData.age <= 0) {
            handleError('Age must be greater than 0');
            return false;
        }
        if (!formData.dob) {
            handleError('Date of Birth is required');
            return false;
        }
        if (!formData.gender) {
            handleError('Gender is required');
            return false;
        }
        if (formData.interests.length === 0) {
            handleError('At least one interest must be selected');
            return false;
        }
        if (!formData.city) {
            handleError('City is required');
            return false;
        }
        if (formData.city === 'Custom' && !formData.customCity) {
            handleError('Custom city is required');
            return false;
        }
        if (!formData.file) {
            handleError('PDF file is required');
            return false;
        }
        if (!formData.image) {
            handleError('Image is required');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('bio', formData.bio);
            formDataToSend.append('age', formData.age);
            formDataToSend.append('dob', formData.dob);
            formDataToSend.append('gender', formData.gender);
            formData.interests.forEach(interest => {
                formDataToSend.append('interests', interest);
            });
            formDataToSend.append('city', formData.city === 'Custom' ? formData.customCity : formData.city);
            formDataToSend.append('file', formData.file);
            formDataToSend.append('image', formData.image);

            const response = await fetch('http://localhost:8080/form/saveMyFormData', {
                method: 'POST',
                body: formDataToSend,
                // Don't set Content-Type header when using FormData,
                // the browser will set it automatically with the correct boundary
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            handleSuccess('Form submitted successfully!');
            onClose(); // Close the form on successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
            handleError(error.message || 'Failed to submit form');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal open onClose={onClose}>
            <StyledBox sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 1200,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: 2
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4">Create New Entry</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        {/* Name */}
                        <FormControl fullWidth>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                variant="outlined"
                                size="medium"
                            />
                        </FormControl>

                        {/* Bio */}
                        <FormControl fullWidth>
                            <TextField
                                label="Bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                variant="outlined"
                                size="medium"
                            />
                        </FormControl>

                        {/* Age */}
                        <FormControl sx={{ width: 250 }}>
                            <TextField
                                label="Age"
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                inputProps={{ min: 0 }}
                                variant="outlined"
                                size="medium"
                            />
                        </FormControl>

                        {/* Date of Birth */}
                        <FormControl sx={{ width: 250 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                label="Date of Birth"
                                value={formData.dob ? new Date(formData.dob) : null}
                                onChange={(newValue) => {
                                    setFormData({
                                    ...formData,
                                    dob: newValue ? newValue.toISOString().split('T')[0] : ''
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    size="medium"
                                    fullWidth
                                    />
                                )}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        {/* Gender */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                row
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        {/* Interests */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Interests</FormLabel>
                            <FormGroup row>
                                {interestOptions.map(interest => (
                                    <FormControlLabel
                                        key={interest}
                                        control={
                                            <Checkbox
                                                checked={formData.interests.includes(interest)}
                                                onChange={handleInterestChange}
                                                value={interest}
                                            />
                                        }
                                        label={interest.charAt(0).toUpperCase() + interest.slice(1)}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>

                        {/* City */}
                        <FormControl fullWidth>
                            <InputLabel>City</InputLabel>
                            <Select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                label="City"
                                variant="outlined"
                                size="medium"
                            >
                                <MenuItem value=""><em>Select a city</em></MenuItem>
                                {cities.map(city => (
                                    <MenuItem key={city} value={city}>{city}</MenuItem>
                                ))}
                            </Select>
                            {formData.city === 'Custom' && (
                                <TextField
                                    label="Custom City"
                                    name="customCity"
                                    value={formData.customCity}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    size="medium"
                                />
                            )}
                        </FormControl>

                        {/* File Upload */}
                        <FormControl fullWidth>
                            <FormLabel>File Upload (PDF only)</FormLabel>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<CloudUploadIcon />}
                                sx={{ mt: 1 }}
                            >
                                Upload PDF
                                <VisuallyHiddenInput 
                                    type="file" 
                                    name="file" 
                                    accept=".pdf" 
                                    onChange={handleChange} 
                                />
                            </Button>
                            {formData.file && (
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Selected: {formData.file.name}
                                </Typography>
                            )}
                        </FormControl>

                        {/* Image Upload */}
                        <FormControl fullWidth>
                            <FormLabel>Image Upload (PNG, JPG, JPEG)</FormLabel>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<CloudUploadIcon />}
                                sx={{ mt: 1 }}
                            >
                                Upload Image
                                <VisuallyHiddenInput 
                                    type="file" 
                                    name="image" 
                                    accept=".png,.jpg,.jpeg" 
                                    onChange={handleChange} 
                                />
                            </Button>
                            {formData.image && (
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Selected: {formData.image.name}
                                </Typography>
                            )}
                        </FormControl>

                        {/* Submit Button */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                type="submit"
                                size="large"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </Box>
                    </Stack>
                </form>
            </StyledBox>
        </Modal>
    );
};

export default MyForm;