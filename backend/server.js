const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const connectDB=require('./../backend/db/db')
const userRoutes=require('./../backend/routes/users')
const authRoutes=require('./../backend/routes/auth'); 
const User = require('./models/users');
const { authenticate } = require('./middleware/auth'); 

const app = express();
app.use(express.json());
app.use(cors());

/* const users = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('admin123', 8), role: 'admin' },
  { id: 2, username: 'faculty', password: bcrypt.hashSync('faculty123', 8), role: 'faculty' },
  { id: 3, username: 'student', password: bcrypt.hashSync('student123', 8), role: 'student' },
]; */

connectDB();



//define authentication routes
app.use('/auth',authRoutes)

//Define User routes
app.use('/user',userRoutes,authenticate)



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
