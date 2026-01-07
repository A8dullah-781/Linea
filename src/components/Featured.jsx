import React from 'react'

const Featured = () => {
  return (
        <div className='w-full px-[4.5vw] pb-2 gap-2 justify-center items-end bg-[#3E2519] flex h-screen'>
            <div className='h-[90%]  w-[40%] bg-[url(/images/featureOne.jpg)] bg-contain'>
            </div>
            <div className='h-[90%] flex flex-col justify-center items-center gap-2 w-[60%]'>
                 <div className='h-1/2 w-full bg-[url(/images/featureTwo.jpg)] bg-contain'></div>
                 <div className='h-1/2 w-full bg-[url(/images/featureThree.jpg)] bg-contain'></div>
            </div>
        </div>
  )
}

export default Featured