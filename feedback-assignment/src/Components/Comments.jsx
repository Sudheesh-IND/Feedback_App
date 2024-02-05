import React from 'react'


function Comments({comment}) {

  
  return (
    <div>
        <div className="bg-clr4 shadow-lg rounded-xl">
            <h2 className="ml-12 mt-4 font-bold">{comment.length} comments</h2>
            {
                comment.length>0? comment.map((item)=>(
                    <div className='grid grid-cols-[200px_auto] sm:h-auto md:h-auto lg:h-auto p-5'>

                <div className='flex items-center justify-center'>
                     <div  className=" rounded ">
                       <img style={{borderRadius:'50%'}} src={`../../src${item.user.image.slice(1)}`} alt="" />
                     </div>
                     
                </div>
                <div>
                <div>
                        <h3 className="font-bold text-base to-black">{item.user.name}</h3>
                        <div className='w-full grid grid-cols-2'>
                            <div>
                                 <h5 className='text-slate-500 font-semibold'>{item.user.username}</h5>
                            </div>
                           

                        </div>
                        <div>
                            <h6 className='mt-2 text-clr6'>{item.content}</h6>
                        </div>
                     </div>

                </div>

            </div>
                )):''
            }
        </div>
    </div>
  )
}

export default Comments