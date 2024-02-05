import React, { useEffect, useState } from 'react'
import Feedback from '../Components/Feedback'
import { Link, useParams } from 'react-router-dom'
import { getOneFeed } from '../Services/allApi'
import Comments from '../Components/Comments'
import AddComments from '../Components/AddComments'

function EachFeedback() {

    const [feed,setFeed]=useState({})
    const [comment,setComment]=useState([])
    const [onParticular,setOnParticular]=useState(false)
    const {id}=useParams()

    const handleFeed=async()=>{

        const {data}=await getOneFeed(id)
        setFeed(data)
        setComment(data.comments)
        

    }

    useEffect(()=>{
        handleFeed()
    },[])
  return (
    <div>

        <div className="grid grid-cols-2 p-3 h-14">
          <div  >
          <Link to={'/'}><h3 className="font-bold m-1 ms-3 text-clr3 cursor-pointer">Go Back</h3></Link>
          </div>
          <div >
         <Link to={`/editfeedback/${id}`}> <button className=" h-10 bg-clr3 w-44 rounded-lg float-right shadow-lg text-white font-bold hover:bg-blue-500">Edit Feedback</button></Link>

          </div>
        </div>
        <div className='p-3'>
            <div>
                <Feedback onPart={onParticular} feed={feed}/>
            </div>
            <div>
                <Comments comment={comment}/>
            </div>
            <div>
                <AddComments/>
            </div>

        </div>

    </div>
  )
}

export default EachFeedback