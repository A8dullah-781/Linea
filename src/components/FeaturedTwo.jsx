import React from 'react'

const Featured = () => {
  return (
        <div className='w-full hidden px-[4.5vw] gap-2 justify-center items-start bg-[#3E2519] lg:flex h-screen'>
            
            <div className='h-[92%] flex flex-col justify-center items-center gap-2 w-[60%]'>
                 <div className='h-1/2 w-full bg-[url(/images/feature/featureFour.webp)] bg-contain'></div>
                 <div className='h-1/2 w-full bg-[url(/images/feature/featureFive.webp)] bg-contain'></div>
            </div>
            <div className='h-[92%]  w-[40%] bg-[url(/images/feature/featureSix.webp)] bg-contain'>
            </div>
        </div>
  )
}

export default Featured