import React, { useState } from 'react'
import { addFeedback } from '../Services/allApi'
import { useNavigate } from 'react-router-dom'

function AddFeedback() {

    const [input,setInput]=useState({

        id:Date.now(),
        title:'',
        category:'',
        desription:'',
        upvotes:0

    })

    const navigate=useNavigate()

 //setting up values
 const setValue=(e)=>{

    let {name,value}=e.target
    setInput({...input,[name]:value})
    console.log(input)

 }

 //handling the api
 const handleFeedback=async()=>{
    if(input.title==""||input.category==""||input.desription==""){
        alert("Please fill all fields")
    }else{
        const response=await addFeedback(input)
    console.log(response)
    if(response.status>=200){
        alert("Added successfully")
        navigate('/')
    }
    }
 }

 const toFirstPage=()=>{
    navigate('/')
 }

  
  return (
    <div>
        <div className="flex h-screen  w-full items-center justify-center">
            <div className="lg:w-4/12 bg-clr4 lg:p-8 h-auto shadow-lg rounded-lg flex flex-col p-4">
                <div className='w-10 h-10 bg-clr1 rounded-full -mt-10 flex items-center justify-center'>
                <i class="fa-solid fa-plus text-slate-50 font-bold"></i>
                </div>
                <h1 className='font-bold text-2xl text-clr6 mt-4'>Create New Feedback</h1>
                
                <h3 className='text-clr6 font-bold mt-8'>Feedback Title</h3>
                <input onChange={(e)=>setValue(e)} name='title' type="text" className="mt-3 pl-3 bg-clr8 h-10 outline-none rounded-lg" />
                <h3 className='text-clr6 font-bold mt-4'>Category</h3>
                <select onChange={(e)=>setValue(e)} name="category" id="" className="mt-2 pl-3 bg-clr8 h-10 outline-none rounded-lg" >
                     <option value="">Select</option> 
                    <option value="feature">feature</option>
                    <option value="enhancement">enhancement</option>
                    <option value="bug">bug</option>
                    
                </select>
                <h3 className='text-clr6 font-bold mt-4'>Feedback Detail</h3>
                <textarea onChange={(e)=>setValue(e)} name="description" id="" cols="30" rows="20" className="mt-2 p-3 h-32 bg-clr8 outline-none rounded-lg"></textarea>
                <div className='ml-auto'>
                <button className=' px-5 mr-2 h-10 bg-clr6 mt-6 rounded-lg hover:bg-slate-500 shadow-md 
                font-bold text-white' onClick={toFirstPage}>Cancel</button>
                <button className=' px-5  h-10 bg-clr1 mt-6 rounded-lg hover:bg-fuchsia-500 shadow-md 
                font-bold text-white' onClick={handleFeedback}>Add Feedback</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddFeedback