import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editFeed, getOneFeed } from '../Services/allApi'

function EditFeedback() {

  const [feed,setFeed]=useState({})
  const {id}=useParams()
  const [title,setTile]=useState("")
  const [category,setCategory]=useState("")
  const [description,setDescription]=useState("")
  const navigate =useNavigate()

  const handleFeed=async()=>{
      const {data}=await getOneFeed(id)
      setTile(data.title)
      setCategory(data.category)
      setDescription(data.description)
  }

  const handleEditditFeed=async()=>{
    if(title==""||category==""||description==""){
      
      alert("please fill all fileds")
    } else{
      const response=await editFeed(id,title,category,description)
      if(response.status>=200){
        alert("Edited successfully")
        navigate(`/feedback/${id}`)
      }
    }
  }

  function toFeed(){
    navigate(`/feedback/${id}`)
  }

  useEffect(()=>{
    handleFeed()
  },[])

  return (
    <div>
        <div className="flex h-screen w-full items-center justify-center">
            <div className="lg:w-4/12 lg:p-8 bg-clr4 h-auto shadow-lg rounded-lg flex flex-col p-4">
                <div className='w-10 h-10 bg-clr1 rounded-full -mt-12 flex items-center justify-center'>
             
                <i class="fa-solid fa-pen-to-square text-slate-50 font-bold"></i>
                </div>
                <h1 className='font-bold text-2xl text-clr6 mt-4'>Edit {title}</h1>
                
                <h3 className='text-clr6 font-bold mt-8'>Feedback Title</h3>
                <input value={title} onChange={(e)=>(setTile(e.target.value))}  name='title' type="text" className="mt-3 pl-3 bg-clr8 h-10 outline-none rounded-lg" />
                <h3 className='text-clr6 font-bold mt-4'>Category</h3>
                <select value={category} onChange={(e)=>(setCategory(e.target.value))}  name="category" id="" className="mt-2 pl-3 bg-clr8 h-10 outline-none rounded-lg" >
                     <option value="">Select</option> 
                    <option value="feature">feature</option>
                    <option value="enhancement">enhancement</option>
                    <option value="bug">bug</option>
                    
                </select>
                <h3 className='text-clr6 font-bold mt-4'>Feedback Detail</h3>
                <textarea value={description} onChange={(e)=>(setDescription(e.target.value))} name="description" id="" cols="30" rows="20" className="mt-2 p-3 h-32 bg-clr8 outline-none rounded-lg"></textarea>
                <div className='ml-auto'>
                <button className=' px-5 mr-2 h-10 bg-clr6 mt-6 rounded-lg hover:bg-slate-500 shadow-md 
                font-bold text-white' onClick={toFeed} >Cancel</button>
                <button className=' px-5  h-10 bg-clr1 mt-6 rounded-lg hover:bg-fuchsia-500 shadow-md 
                font-bold text-white' onClick={handleEditditFeed} >Edit Feedback</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default EditFeedback