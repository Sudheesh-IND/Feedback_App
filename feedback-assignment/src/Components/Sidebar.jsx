import React from 'react'
import backgroundImg from '../assets/background-header.png'

function Sidebar({sentDataToSuggestion}) {

  const handleSpecific=(spc)=>{
     
    sentDataToSuggestion(spc)
  }
  
  return (
    <div>
        <div className="h-auto p-3">
               <div style={{backgroundImage:`url(${backgroundImg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className="h-40 w-full rounded-lg shadow-lg p-4 flex flex-col items-start justify-center">
                <h1 className='text-white font-bold text-3xl'>Eqaim</h1> 
                
                <h3 className='text-white font-semibold mt-3'>Feedback Board</h3>
             
                
               </div>
               <div className="h-40 my-3 w-full rounded-lg bg-clr4 shadow-lg p-2">
               <button onClick={()=>handleSpecific("")} className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">All</button>

                <button onClick={()=>handleSpecific("ui")} className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">UI</button>
                <button onClick={()=>handleSpecific("ux")}  className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">UX</button>
                <button onClick={()=>handleSpecific("enhancement")} className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">Enhancement</button>
                <button onClick={()=>handleSpecific("feature")} className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">Feature</button>
                <button onClick={()=>handleSpecific("bug")} className="p-2 px-4 font-bold text-sm rounded-lg bg-clr8 m-2 text-clre2 hover:text-white hover:bg-clre2 ">Bug</button>

               </div>
               {/* <div className="h-40 my-3 w-full rounded-lg bg-clr4 shadow-lg"></div> */}
          </div>
    </div>
  )
}

export default Sidebar