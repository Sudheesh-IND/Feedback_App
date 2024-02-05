const feedback = require("../model/feedbackModel")


//get all feed backs
exports.getFeedbacks=async(req,res)=>{
    try {

        const allFeddbacks=await feedback.find()

        if(allFeddbacks.length>0){
            res.status(200).json(allFeddbacks)
        }else{
            res.status(400).json("Not found")
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//get particular feedbacks
exports.getParticular=async(req,res)=>{
    try {

        const {id}=req.params
        const response=await feedback.findOne({id})

         res.status(200).json(response)
       
    } catch (error) {
        res.status(401).json(error)
    }
}

//adding comments
exports.addComments=async(req,res)=>{
       
   
    try {
      const body=req.body
      const {id}=req.params
      const response=await feedback.findOne({id})  
      response.comments.push(body)
      response.save()
      res.status(200).json("Saved successfully")
    } catch (error) {
        res.status(401).json(error)
    }
}

//inserting the feedbacks
exports.addFeedback=async(req,res)=>{
    try {

        const body=req.body
        await feedback.insertMany(body)
        res.status(200).json("Successful")
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//get specific category
exports.getSpecific=async(req,res)=>{
    try {

        const {spec}=req.params
        const response=await feedback.find({category:spec})
        if(response){
            res.status(200).json(response)
        }
        
    } catch (error) {
        res.status(400).json(error)
    }
}

//editing feedback
exports.editFeedback=async(req,res)=>{
    try {
        
        const {id}=req.params
        const {title,category,description}=req.body
        const response=await feedback.findOne({id})
        response.title=title
        response.category=category
        response.description=description
        response.save()
        res.status(200).json("Successful")

    } catch (error) {
        res.status(401).json(error)
    }
}

