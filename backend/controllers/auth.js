const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const User=require('../models/users');
const Course=require('../models/course');
//Register a new user


const register= async (req,res,next)=>{
  
    const{username,email,password,role}=req.body
  try{/* 
   const hashedPassword=await bcrypt.hash(password,10); */
   const user=new User({username,email,password:password,role});
   await user.save();
   res.json({message:'Registration Successfully'})


  }catch(error){
    next(error);

  }

};

// Login with an existing user

const login= async(req,res,next)=>{

    const {username,password}=req.body
    

    try{

        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({message:'Incorrect password'})
        }

        const passwordMatch=await user.comparePassword(password);
        if (!passwordMatch){
            return res.status(401).json({message:'Incorrect password'})
        }

      const token=jwt.sign({userId:user._id,role: user.role},process.env.SECRET_KEY,{

        expiresIn:'1h'
        
      });
      res.json({token}
        
      );
    }
    catch(error){
        next(error)
    }
};




//Register a new user


const addCourse= async (req,res,next)=>{
  
    const{courseName}=req.body
  try{/* 
   const hashedPassword=await bcrypt.hash(password,10); */
   const course=new Course({courseName});
   await course.save();
   res.json({message:'Course Successfully added'})


  }catch(error){
    next(error);

  }




};


//View all course
const getCourses= (req, res) => {
    Course.find()
      .then(Courses => res.json(Courses))
      .catch(err => res.status(500).json({ error: err.message }));
  };


  //Update course course

  async function updateCourse(req, res, next) {
    try {
      // Extract course ID and course name from request body
      const { _id, courseName } = req.body;
  
      // Ensure both fields are present
      if (!_id || !courseName) {
        return res.status(400).json({ result: "Missing course ID or course name" });
      }
  
      // Update the course document
      let result = await Course.updateOne(
        { _id }, // Filter by course ID
        { $set: { courseName } } // Set the new course name
      );
  
      // Check if the course was updated
      if (result.matchedCount === 0) {
        return res.status(404).json({ result: "Course not found" });
      } else if (result.modifiedCount === 0) {
        return res.status(200).json({ result: "No changes made to the course" });
      } else {
        return res.status(200).json({ result: "Course has been successfully updated" });
      }
    } catch (error) {
      next(error);
    }
  }
  

module.exports={register,login,addCourse,getCourses,updateCourse}



