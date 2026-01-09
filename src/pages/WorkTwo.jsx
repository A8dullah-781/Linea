import React from 'react'
import FooterDark from '../utils/FooterDark'
import Footer from '../utils/Footer'

const WorkTwo = () => {
  return (
    <>
    <div className='lg:mt-[10vh] md:mt-[6vh] mt-[8vh] py-14 min-h-screen w-full bg-[#3E2519] flex flex-col gap-4 items-center'>
        <div className='flex justify-between md:flex-row flex-col items-center h-[70vh] md:h-[30vh] lg:h-[70vh] w-[90vw]'>
            <div className='h-full  w-full rounded-2xl text-center md:hidden flex flex-col justify-center items-center gap-2  text-[#FEF1D9] '>
                <div className='uppercase text-[12vw] leading-none'>Noir <br /> Residence</div>
                <div  className='uppercase  text-[4vw] font-[200] '>(residential Project)</div>
                <div  className=' text-[3vw] pb-6 font-[300] '>A high-end residential interior concept developed around a dark, sophisticated color palette to convey depth, elegance, and modern luxury. The design emphasizes contrast, layered textures, and controlled lighting to create a strong visual identity while maintaining comfort and functionality throughout the living spaces.</div>
            </div>
            <div className='h-full md:w-[49%] w-full rounded-2xl  bg-[url(/images/workTwo/twoMain.webp)] bg-cover '></div>
            <div className='h-full  w-[49%] rounded-2xl hidden md:flex flex-col justify-center items-start gap-2 pr-10 text-[#FEF1D9] '>
                <div className='uppercase text-[4vw] leading-none'>Noir <br /> Residence</div>
                <div  className='uppercase text-[1.3vw] font-[200] '>(residential Project)</div>
                <div  className=' text-[1vw] font-[300] '>A high-end residential interior concept developed around a dark, sophisticated color palette to convey depth, elegance, and modern luxury. The design emphasizes contrast, layered textures, and controlled lighting to create a strong visual identity while maintaining comfort and functionality throughout the living spaces.</div>
            </div>
        </div>
              <div className=' bg-[url(/images/workTwo/twoSix.webp)] bg-center rounded-2xl bg-cover h-[40vh] md:h-[70vh] w-[90vw]'>

        </div>
        <div className='flex justify-between flex-col md:flex-row gap-2 items-center h-[70vh] w-[90vw]'>
            <div className='h-full w-full md:w-[50%] rounded-2xl  bg-[url(/images/workTwo/twoTwo.webp)] bg-cover '></div>
            <div className='h-full w-full md:w-[50%] rounded-2xl  bg-[url(/images/workTwo/twoThree.webp)] bg-cover '></div>
        </div>

        <div className=' bg-[url(/images/workTwo/twoFour.webp)] h-[40vh] md:h-[70vh] bg-cover bg-center rounded-2xl w-[90vw]'>

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

export default WorkTwo