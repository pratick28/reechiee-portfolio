import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/0f39225b-3dc9-467e-b492-7eb89014d816" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFDF00] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form or send me an Email @ pratick600@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] my-4 p-2 rounded' type="text"  placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email"  placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] my-4 p-2 rounded' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#FFDF00] hover:border-[#FFDF00] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact