const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{
        type: String, 
        require: true
    },
    email:{
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    telephone:{
        type:Number,
        required: true
    }

    
})
module.exports = Student = mongoose.model('student', StudentSchema)