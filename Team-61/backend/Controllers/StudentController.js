const xlsx = require('xlsx');
const bcrypt = require('bcrypt');
const UserStudentModel = require('../Models/UserStudent');
const fs = require('fs');

const addStudentsFromExcel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        message: 'No file uploaded', 
        success: false 
      });
    }

    // Read Excel file
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert to JSON (handle headerless files)
    const data = xlsx.utils.sheet_to_json(worksheet, {
      header: ['username', 'password'], // Force these headers
      defval: null, // Skip empty cells
    });

    // Validate and process rows
    const students = [];
    for (const row of data) {
      // Skip rows with missing data
      if (!row.username || !row.password || 
          typeof row.password !== 'string' || 
          typeof row.username !== 'string') {
        continue;
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(String(row.password), 10);
      students.push({
        username: String(row.username).trim(),
        password: hashedPassword,
        role: 'student'
      });
    }

    // Insert into database
    if (students.length > 0) {
      await UserStudentModel.insertMany(students);
    }

    // Delete the temporary file
    fs.unlinkSync(req.file.path);

    res.status(201).json({ 
      message: `${students.length} students added successfully`, 
      success: true,
      data: students // Optional: Return processed data for debugging
    });

  } catch (err) {
    // Delete the temporary file even if error occurs
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ 
      message: 'Server error while processing file', 
      success: false, 
      error: err.message 
    });
  }
};

module.exports = { addStudentsFromExcel };