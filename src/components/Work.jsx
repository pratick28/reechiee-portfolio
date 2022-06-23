import React from 'react'
import work from '../assets/work.jpeg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000] mx-auto p-4 flex flex-col justify-center w-5/6 h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFDF00]'>Work</p>
                    <p className='py-6'>Check out some of my Work</p>
                </div>
                {/* Container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${work})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effects */}
                        <div className='opacity-0 group hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${work})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effects */}
                        <div className='opacity-0 group hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Stack Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${work})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effects */}
                        <div className='opacity-0 group hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                AWS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white text-lg font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work