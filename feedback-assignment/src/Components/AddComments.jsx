import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addComment } from '../Services/allApi'

function AddComments() {

    //state for adding comment
    const [comments,setComment]=useState({


        id:Date.now(),
        content:" ",
        
        user:{
            image: "./assets/user-images/image-zena.jpg",
            name: "Zena Kelley",
            username: "velvetround"
        }
    })

    //tyaking id from params
    const {id}=useParams()

    //function for setting value
    const setValue=(e)=>{

       let {value,name}=e.target
       setComment({...comments,[name]:value})
       console.log(comments)
        
    }

    //function for uploading comments
    const handleComment=async()=>{
       const response=await addComment(id,comments)

       if(response.status>=200){
        alert("Comment added successfully")
        setComment(comments.content="")
       }else{
        console.log(response)
       }
    }

    
  return (
    <div>
        <div className="grid bg-clr4 lg:grid-cols-[auto_10%] sm:grid-cols-[auto_20%] rounded-lg p-4 h-28 shadow-lg mt-5">

            <div className='h-full flex items-center justify-center'>
                 <input name='content'  onChange={(e)=>setValue(e)}  className='w-full h-10 rounded-lg outline-none border-2 pl-3 border-clr3' placeholder='Type your comment' type="text" />
            </div>
            <div className='h-full flex items-center justify-center'>
                <button className='w-full h-10 bg-clr1 mx-3 rounded-lg hover:bg-fuchsia-500 shadow-md 
                font-bold text-white ' onClick={handleComment}>Submit</button>
            </div>

        </div>
    </div>
  )
}

export default AddComments