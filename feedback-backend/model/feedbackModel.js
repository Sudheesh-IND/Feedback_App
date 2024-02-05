const mongoose=require('mongoose')

const feedbackSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number
    },
    status:{
        type:String
    },
    description:{
        type:String
    },
    comments:{
        type:Array
    }
})

const feedback=mongoose.model('feedback',feedbackSchema)
module.exports=feedback