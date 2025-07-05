import React, { useState, useRef, useEffect } from 'react';
import { handleError, handleSuccess } from '../utils';

const Camera = () => {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraOn(true);
            setPermissionDenied(false);
            setCapturedImage(null); 
        } catch (err) {
            setPermissionDenied(true);
            handleError('Camera access denied');
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsCameraOn(false);
    };

    const captureImage = () => {
        if (!isCameraOn || !videoRef.current) return;

        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
            setCapturedImage(blob);
            handleSuccess('Image captured!');
        }, 'image/jpeg', 0.95);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check if the file is an image
        if (!file.type.match('image.*')) {
            handleError('Please select an image file');
            return;
        }

        // Convert the file to blob and set as captured image
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                // Draw the image on canvas to maintain consistency with captured images
                const canvas = canvasRef.current;
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                canvas.toBlob((blob) => {
                    setCapturedImage(blob);
                    handleSuccess('Image uploaded!');
                }, 'image/jpeg', 0.95);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);

        // Reset the file input
        e.target.value = '';
    };

    const sendImageToAPI = async () => {
        if (!capturedImage) return;

        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('image', capturedImage, 'image.jpg');

            const response = await fetch('https://your-api-endpoint.com/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Upload failed');
            
            handleSuccess('Image sent successfully!');
            setCapturedImage(null);
        } catch (error) {
            handleError('Failed to send image: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleCamera = () => {
        if (isCameraOn) {
            stopCamera();
        } else {
            startCamera();
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const removeImage = () => {
        setCapturedImage(null);
        handleSuccess('Image removed');
    };

    return (
        <div style={{
            margin: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Video element for camera feed */}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    display: isCameraOn ? 'block' : 'none'
                }}
            />
            
            {/* Hidden canvas for image capture */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            
            {/* Hidden file input for image upload */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                style={{ display: 'none' }}
            />
            
            {/* Preview of captured/uploaded image */}
            {capturedImage && (
                <div style={{ margin: '10px 0', textAlign: 'center' }}>
                    <img 
                        src={URL.createObjectURL(capturedImage)} 
                        alt="Preview" 
                        style={{
                            maxWidth: '100%',
                            maxHeight: '200px',
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    />
                    <p>{isCameraOn ? 'Captured Image Preview' : 'Uploaded Image Preview'}</p>
                </div>
            )}
            
            {/* Camera controls */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {!capturedImage && (
                    <button
                        onClick={toggleCamera}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: isCameraOn ? '#f44336' : '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
                    </button>
                )}
                {isCameraOn && (
                    <button
                        onClick={captureImage}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        Take a Pic
                    </button>
                )}
                {!capturedImage && (
                    <button
                        onClick={triggerFileInput}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#9C27B0',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        Upload Image
                    </button>
                )}
                {capturedImage && (
                    <button
                        onClick={sendImageToAPI}
                        disabled={isLoading}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: isLoading ? '#9E9E9E' : '#FF9800',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        {isLoading ? 'Sending...' : 'Send to API'}
                    </button>
                )}
                {capturedImage && (
                    <button
                        onClick={removeImage}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        Remove
                    </button>
                )}
            </div>
            
            {/* Status indicator */}
            <p style={{ color: isCameraOn ? 'green' : 'gray', marginTop: '10px' }}>
                {isCameraOn ? 'Camera is on' : 'Camera is off'}
            </p>
            
            {/* Permission denied message */}
            {permissionDenied && (
                <p style={{ color: 'red', marginTop: '10px' }}>
                    Camera access is required to use this feature.
                </p>
            )}
        </div>
    );
};

export default Camera;