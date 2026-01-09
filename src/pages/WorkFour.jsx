import React from 'react'
import FooterDark from '../utils/FooterDark'
import Footer from '../utils/Footer'

const WorkFour = () => {
  return (
    <>
    <div className='lg:mt-[10vh] md:mt-[6vh] mt-[8vh] py-14 min-h-screen w-full bg-[#3E2519] flex flex-col gap-4 items-center'>
        <div className='flex justify-between md:flex-row flex-col items-center h-[70vh] md:h-[30vh] lg:h-[70vh] w-[90vw]'>
            <div className='h-full  w-full rounded-2xl text-center md:hidden flex flex-col justify-center items-center gap-2  text-[#FEF1D9] '>
                <div className='uppercase text-[12vw] leading-none'>Brew Haven <br /> Café</div>
                <div  className='uppercase  text-[4vw] font-[200] '>(commercial Project)</div>
                <div  className=' text-[3vw] pb-6 font-[300] '>A contemporary café interior designed to create a warm and welcoming environment while maintaining a clean, modern aesthetic. The layout was carefully planned to ensure smooth movement, comfortable seating, and a balanced connection between lighting, materials, and spatial flow. The design focuses on enhancing the customer experience while reflecting a relaxed yet refined café atmosphere.</div>
            </div>
            <div className='h-full md:w-[49%] w-full rounded-2xl  bg-[url(/images/workFour/fourMain.webp)] bg-cover '></div>
            <div className='h-full  w-[49%] rounded-2xl hidden md:flex flex-col justify-center items-start gap-2 pr-10 text-[#FEF1D9] '>
                <div className='uppercase text-[4vw] leading-none'>Brew Haven <br /> Café</div>
                <div  className='uppercase text-[1.3vw] font-[200] '>(commercial Project)</div>
                <div  className=' text-[1vw] font-[300] '>A contemporary café interior designed to create a warm and welcoming environment while maintaining a clean, modern aesthetic. The layout was carefully planned to ensure smooth movement, comfortable seating, and a balanced connection between lighting, materials, and spatial flow. The design focuses on enhancing the customer experience while reflecting a relaxed yet refined café atmosphere.</div>
            </div>

        </div>
             <div className='flex md:flex-row lg:h-[140vh] h-[140vh] md:h-[70vh] w-[90vw] flex-col justify-center items-center gap-2'>
               <div className=' bg-[url(/images/workFour/fourTwo.webp)]  bg-center rounded-2xl bg-cover h-full w-[90vw]'></div>

              <div className='flex justify-between flex-col gap-2 items-center h-full w-[90vw]'>
                <div className=' bg-[url(/images/workFour/fourTwo.webp)] block md:hidden bg-center rounded-2xl bg-cover h-full w-[90vw]'></div>
            <div className='h-[70vh] w-full rounded-2xl  bg-[url(/images/workFour/fourFive.webp)] bg-cover bg-center '></div>
            <div className='h-[70vh] w-full rounded-2xl  bg-[url(/images/workFour/fourThree.webp)] bg-cover bg-center '></div>
        </div>
             </div>
        

        <div className=' bg-[url(/images/workFour/fourFour.webp)] bg-bottom h-[40vh] lg:h-[100vh] md:-[70vh] bg-cover rounded-2xl w-[90vw]'>

        </div>
    </div>
    <div className="md:hidden block">
    <Footer/>
    </div>
    <div className="hidden md:block">
    <FooterDark/>
    </div>
    </>
  )
}

export default WorkFour