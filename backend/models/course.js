const mongoose=require('mongoose')

const CourseSchema = new mongoose.Schema({
    id_:Number,
    courseName:String

})

module.exports =mongoose.model('Course',CourseSchema)