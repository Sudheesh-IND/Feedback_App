
const mongoose=require('mongoose')

//connecting mongodb with 
mongoose.connect(process.env.DATABASE,{
    
    useUnifiedTopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log('databse connected')
}).catch((err)=>{
   console.log(err)
})