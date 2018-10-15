const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    user: {
       type: Schema.Types.ObjectId,
       ref:'user' 
    },
    handle:{
        type: String,
        required:true,
        max:40

    },
    name:{
        type: String, 
        required: true
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
    },
    isActive:{
        type: Boolean,
        default: false
    },
    grade:{
        type:Number,
        required: false
    }


    
});
module.exports = Student = mongoose.model('student', StudentSchema)