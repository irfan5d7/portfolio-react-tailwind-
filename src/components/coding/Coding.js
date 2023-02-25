import React from 'react'
import Leetcode from './Leetcode'

const Coding = () => {
    return (
        <div name='coding' className='w-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Coding profiles
                    </p>
                    <p className='py-6'>/ Check out my coding profiles</p>
                </div>
                <Leetcode />
      
            </div>
        </div>
      )
}

export default Coding