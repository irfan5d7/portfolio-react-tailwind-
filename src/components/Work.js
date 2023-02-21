import React from 'react'
import Project from './Project'
import {projectMeta} from '../data/projectMetadata'


const Work = () => {
  return (
    <div name='work' className='w-full h-30 text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div className='w-full  grid grid-cols-1 sm:grid-cols-2 gap-10 text-center py-8'>
                {projectMeta.map((p) => (
                    <Project proj = {p} key={p.id} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Work