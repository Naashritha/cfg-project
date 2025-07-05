const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const UserAdminModel = require("../Models/UserAdmin");
const UserTeacherModel = require("../Models/UserTeacher");
const UserStudentModel = require("../Models/UserStudent");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name,
                _id: user._id
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const loginTeacher = async (req, res) => {
    try {
        const { username, password } = req.body;
        const teacher = await UserTeacherModel.findOne({ username });
        const errorMsg = 'Auth failed username or password is wrong';
        
        if (!teacher) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const isPassEqual = await bcrypt.compare(password, teacher.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const jwtToken = jwt.sign(
            { username: teacher.username, _id: teacher._id, role: teacher.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200)
            .json({
                message: "Teacher Login Success",
                success: true,
                jwtToken,
                username: teacher.username,
                role: teacher.role,
                _id: teacher._id
            });
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            });
    }
}

const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await UserAdminModel.findOne({ username });
        const errorMsg = 'Auth failed username or password is wrong';
        
        if (!admin) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const isPassEqual = await bcrypt.compare(password, admin.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const jwtToken = jwt.sign(
            { username: admin.username, _id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200)
            .json({
                message: "Admin Login Success",
                success: true,
                jwtToken,
                username: admin.username,
                role: admin.role,
                _id: admin._id
            });
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            });
    }
}

const loginStudent = async (req, res) => {
    try {
        const { username, password } = req.body;
        const student = await UserStudentModel.findOne({ username });
        const errorMsg = 'Auth failed username or password is wrong';
        
        if (!student) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const isPassEqual = await bcrypt.compare(password, student.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        
        const jwtToken = jwt.sign(
            { username: student.username, _id: student._id, role: student.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200)
            .json({
                message: "Student Login Success",
                success: true,
                jwtToken,
                username: student.username,
                role: student.role,
                _id: student._id
            });
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            });
    }
}

module.exports = {
    signup,
    login,
    loginTeacher,
    loginAdmin,
    loginStudent
}