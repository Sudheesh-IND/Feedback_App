//importing express router
const express=require('express')
const router=express.Router()

const feedbackController=require('../controller/feedbackController')

//defining routes
router.get('/feedback',feedbackController.getFeedbacks)

//get particular
router.get('/getonefeed/:id',feedbackController.getParticular)

//adding comments
router.post('/addcomment/:id',feedbackController.addComments)

//adding feedback
router.post('/addfeedback',feedbackController.addFeedback)

//getting category wise
router.get('/specific/:spec',feedbackController.getSpecific)

//editing feedback
router.post('/edit/:id',feedbackController.editFeedback)




module.exports=router