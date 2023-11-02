import React from 'react'
import HighlightText from './HighlightText'
import {heroSection} from '../data/Hero'
import {TypeAnimation} from 'react-type-animation'
const HeroSection = () => {
  return (
    <div className='min-h-full h-full min-w-full bgGrid opacity-100 p-6'>
        <div className='md:min-w-max min-h-full flex flex-col justify-center md:items-center gap-8 md:gap-5'>
            <h1 className='font-semibold text-6xl md:text-8xl text-secondary-50 uppercase md:text-center'>Akash Litoriya</h1>
            <div className='block w-[390px] text-xl md:text-3xl
             font-semibold text-secondary-50'>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                    500,
                    'I\'m a Programmer', // initially rendered starting point
                    1000,
                    'I\'m a Full Stack Developer',
                    ]}
                    speed={50}
                    style={{ color: '#699BF7' }}
                    repeat={Infinity}
                />
            </div>
            <p className='max-w-[630px] w-10/12 sm:w-4/6 text-sm text-justify md:text-center text-secondary-50 md:text-2xl font-robo'>who's all about that <HighlightText text={"MERN"} /> stack life. I've been busy crafting web projects of all kinds. Wanna peek at my <HighlightText text={"resume"}/>? Hit that button below, or just shoot me a quick 'hi'!<br></br> Let's <HighlightText text={"connect"}/> and create something awesome together!</p>
            <div className='flex flex-row gap-3 w-full justify-between md:justify-normal md:w-fit md:gap-12'>
                <button className='px-8 md:px-5 py-2 text-richblue rounded-full uppercase font-medium border-[3px] border-richblue text-xl md:min-w-[188px]'>Resume</button>
                <button className='bg-richblue uppercase rounded-full md:min-w-[188px] text-xl font-medium text-secondary-50 px-8 py-2 md:px-5 border-[3px] border-richblue'>Let's Talk</button>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
