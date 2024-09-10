const express =require('express');
const {register,login,addCourse,getCourses,updateCourse}=require('../controllers/auth');
const router=express.Router();

router.post('/register',register)
router.post('/login',login)
router.post('/addCourse',addCourse)
router.get('/getCourses',getCourses)
router.put('/updateCourse',updateCourse)

module.exports=router;