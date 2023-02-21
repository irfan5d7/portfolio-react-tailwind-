import React from 'react'
import {educData} from '../data/educationData';

import College from './College';
const Education = () => {
    return (
        <div name='education' className='w-full h-30 text-gray-300 bg-[#0a192f] py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Education
                    </p>
                    <p className='py-6'>/ Check out some of my Education Background</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-12 text-center py-8'>
                    {educData.map((c)=>(
                        <College clg ={c} key = {c.eid}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education