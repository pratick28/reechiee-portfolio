import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FFDF00]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I am Pratick, nice to meet you. Please have a look around.</p>
          </div>
          <div>
            <p>I am an IT enthusiast working as a Software Developer 
               in a progressive organisation where my creativite approach 
               to problem solving are being tested. I am a committed 
               technical professional toward fostering collaborative team
               environments that deliver effective solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
