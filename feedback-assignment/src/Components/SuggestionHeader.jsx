import React from 'react'
import { Link } from 'react-router-dom'

function SuggestionHeader({len}) {
  return (
    <div>
        <div className="w-full grid grid-cols-2 bg-clr6 h-20 rounded-lg shadow-xl my-4">
           <div className="w-full p-3 flex items-center">
            <h4 className="font-bold text-xl text-white mx-3">{len} Suggestions</h4>
           </div>
           <div className="w-full p-3 flex items-center justify-end">
            <Link to={`/addfeedback`}><button className=" h-10 bg-clr1 w-44 rounded-lg shadow-lg text-white font-bold hover:bg-fuchsia-500">Add Feedback</button>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default SuggestionHeader