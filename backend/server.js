const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const connectDB=require('./../backend/db/db')
const userRoutes=require('./../backend/routes/users')
const authRoutes=require('./../backend/routes/auth'); 
const dwormRoutes=require('./routes/Treatment/deworming');
const vaccRoutes=require('./routes/Treatment/vacc');
const diseaseRoutes=require('./routes/Treatment/disease')
const recordRoutes=require('./routes/mrecord')
const drecordRoutes=require('./routes/mdistribution')
const pregnancyRoutes=require('./routes/Fertility/pregnancy')
const heatRoutes=require('./routes/Fertility/heat')
const fmetricsRoutes=require('./routes/Fertility/fmetrics')
const calvingRoutes=require('./routes/Fertility/calving')
const costreturnRoutes=require('./routes/Economics/costreturn')
const feedcostRoutes=require('./routes/Economics/feedcost')
const inventorycostRoutes=require('./routes/Economics/inventorycost')
const labourcostRoutes=require('./routes/Economics/labourcost')
const feedingcostRoutes=require('./routes/Feeding/feed')

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

//Define MilkRecord routes
app.use('/record',recordRoutes)

//Define MilkdRecord routes
app.use('/drecord',drecordRoutes)

//Define deworningRecord routes
app.use('/dwrecord',dwormRoutes)

//Define VaccinationRecord routes
app.use('/vrecord',vaccRoutes)

//Define diseaseRecord routes
app.use('/disrecord',diseaseRoutes)

//Define calvingRecord routes
app.use('/calrecord',calvingRoutes)

//Define fmetricsRecord routes
app.use('/fmrecord',fmetricsRoutes)

//Define heatRecord routes
app.use('/hrecord',heatRoutes)

//Define pregnancyRecord routes
app.use('/prrecord',pregnancyRoutes)

//Define costreturn under Economics routes
app.use('/economics/crrecord',costreturnRoutes)

//Define feedcost under Economics routes
app.use('/economics/ferecord',feedcostRoutes)


//Define inventorycost under Economics routes
app.use('/economics/increcord',inventorycostRoutes)


//Define labourcost under Economics routes

app.use('/economics/lbcrecord',labourcostRoutes)


//Define labourcost under Economics routes

app.use('/feeding/ferecord',feedingcostRoutes)



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
