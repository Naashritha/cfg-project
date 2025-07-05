const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const FormDataModel = require('../Models/FormData');
//const ensureAuthenticated = require('../Middlewares/Auth');

// Create GridFS bucket
let gfs;
mongoose.connection.once('open', () => {
    gfs = new GridFSBucket(mongoose.connection.db, {
        bucketName: 'uploads'
    });
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/saveMyFormData', upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'image', maxCount: 1 }
]), async (req, res) => {
    try {
        const { name, bio, age, dob, gender, interests, city, userId } = req.body;
        // Since we're not using JWT, the userId must be provided in the request body
        if (!userId) {
            return res.status(400).json({
                message: 'userId is required',
                success: false
            });
        }

        // Process file uploads
        let fileId, imageId;

        if (req.files['file']) {
            const file = req.files['file'][0];
            const uploadStream = gfs.openUploadStream(file.originalname, {
                contentType: file.mimetype
            });
            uploadStream.end(file.buffer);
            fileId = uploadStream.id;
        }

        if (req.files['image']) {
            const image = req.files['image'][0];
            const uploadStream = gfs.openUploadStream(image.originalname, {
                contentType: image.mimetype
            });
            uploadStream.end(image.buffer);
            imageId = uploadStream.id;
        }

        // Create form data record
        const formData = new FormDataModel({
            name,
            bio,
            age,
            dob,
            gender,
            interests: Array.isArray(interests) ? interests : [interests],
            city,
            fileId,
            imageId,
            userId: new mongoose.Types.ObjectId(userId) // Ensure userId is a valid ObjectId
        });

        await formData.save();

        res.status(201).json({
            message: 'Form data saved successfully',
            success: true,
            data: formData
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
});

// Add endpoints to retrieve files if needed
router.get('/file/:id', async (req, res) => {
    try {
        const fileId = new mongoose.Types.ObjectId(req.params.id);
        const file = await gfs.find({ _id: fileId }).next();
        
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.set('Content-Type', file.contentType);
        const downloadStream = gfs.openDownloadStream(fileId);
        downloadStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving file' });
    }
});

module.exports = router;