import React from 'react'
import {Link} from 'react-router-dom'

function Feedback({feed}) {

  
  return (
    <div>
        <Link to={`/feedback/${feed.id}`}>
        <div className="w-full flex flex-row bg-clr4 my-3 shadow-md sm:h-auto md:h-32 lg:h-28">
           <div className="w-14 h-full flex items-center justify-center">
               <button className="w-7 h-10 bg-clr8 shadow-lg rounded-lg font-medium text-clre2"><i class="fa-solid fa-angle-up"></i> <br /> {feed.upvotes}</button>
           </div>
           <div className=" h-full w-3/4 ">
               <h3 className="font-bold m-1 ms-3 text-clr3">{feed.title}</h3>
               <h4 className="font-medium text-slate-400 m-1 ms-3">{feed.description}</h4>
               <button className="bg-clr8 ms-3 mt-2 rounded-lg w-auto px-5 text-clr3 text-sm">{feed.category}</button>

           </div>
           <div className="h-full w-44 flex items-center justify-end">
           <i class="fa-solid fa-comment text-clr3"></i>
           </div>
        </div>
        </Link>
    </div>
  )
}

export default Feedback