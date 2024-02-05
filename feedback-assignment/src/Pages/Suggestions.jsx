import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import SuggestionHeader from '../Components/SuggestionHeader'
import Feedback from '../Components/Feedback'
import { getFeedback, getSpec } from '../Services/allApi'
import { Link } from 'react-router-dom'

function Suggestions() {

  const [feedback,setFeedback]=useState([])
  const[specific,setSpecific]=useState("All")
 console.log(specific)
  const handleFeedback=async()=>{
    const {data}=await getFeedback()
    setFeedback(data)
  }

  const handleSidebar=(data)=>{
      setSpecific(data)
  }

  const handleSpecific=async()=>{
    const {data}=await getSpec(specific)
    
    setFeedback([])
    setFeedback(data)
  }

  useEffect(()=>{
      if(specific=="All"){
        handleFeedback()
      }else if(specific==""){
        handleFeedback()
      }else{
        handleSpecific()
      }
      
      
  },[specific])
  return (
    <div>
      <div className="grid sm:grid-cols-8  lg:grid-cols-[400px_auto] gap-1 ">
          <div className="h-auto p-3">
               <Sidebar sentDataToSuggestion={handleSidebar}/>
          </div>
          <div className="min-h-screen p-3" >
            <SuggestionHeader len={feedback.length}/>
            <div>
             {
              feedback.length>0? feedback.map((feed)=>(
                <Feedback feed={feed}/>
              )):<div className="w-full h-screen flex items-center justify-center flex-col">
                    <h1 className='font-bold text-4xl space-x-2 text-clre2'>No Feedbacks On {specific}</h1>
                    <Link to={`/addfeedback`}><button className=" h-10 mt-8 bg-clr1 w-44 rounded-lg shadow-lg text-white font-bold hover:bg-fuchsia-500">Add Feedback</button>
            </Link>
                </div>
             }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Suggestions