const { signup, login, loginTeacher, loginAdmin, loginStudent } = require('../Controllers/AuthController');
const { signupValidation, loginValidation, teacherLoginValidation, adminLoginValidation, studentLoginValidation } = require('../Middlewares/AuthValidation');
const { addStudentsFromExcel } = require('../Controllers/StudentController');
const upload = require('../Middlewares/uploadMiddleware');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/login/teacher', teacherLoginValidation, loginTeacher);
router.post('/login/admin', adminLoginValidation, loginAdmin);
router.post('/addStudents', upload.single('file'), addStudentsFromExcel);
router.post('/login/student', studentLoginValidation, loginStudent);

module.exports = router;