import React from 'react'
import { AiFillHome, AiFillMail, AiFillPhone, AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
function Contact({ theme }) {
    return (
        <div className='w-full flex justify-around min-h-[450px] pt-[150px] flex-wrap select-none'>
            <div className='w-[80%] text-center md:w-[30%] bg-gray-300 rounded-md cursor-pointer my-4 flex flex-col justify-around'>
                {theme
                    ? <AiFillPhone className='text-3xl block mx-auto' />
                    : <AiOutlinePhone className='text-3xl block mx-auto' />}

                <h4>Phone</h4>
                <h5>0901000000</h5>
            </div>
            <div className='w-[80%] text-center md:w-[30%] bg-gray-300 rounded-md cursor-pointer my-4 flex flex-col justify-around'>
                {theme ? <AiFillMail className='text-3xl block mx-auto' /> : <AiOutlineMail className='text-3xl block mx-auto' />}
                <h4>Mail</h4>
                <h5>dmovie@gmail.com</h5>
            </div>
            <div className='w-[80%] text-center md:w-[30%] bg-gray-300 rounded-md cursor-pointer my-4 flex flex-col justify-around'>
                {theme ? <AiFillHome className='text-3xl block mx-auto' /> : <AiOutlineHome className='text-3xl block mx-auto' />}
                <h4>Address</h4>
                <h5>199/9A/Nothing Nowhere</h5>
            </div>
        </div>
    )
}

export default Contact