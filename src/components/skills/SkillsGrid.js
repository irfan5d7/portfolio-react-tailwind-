import React from 'react'
import SkillCard from './SkillCard'

const SkillsGrid = (props) => {
    const {ob, desc } = props
    return (
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='py-4'>{desc}</p>
            </div>
            {/* grid  */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {ob.map((p)=>(
                    <SkillCard skill ={p} key = {p.skid}/>
                ))}
            </div>
        </div>
    )
}

export default SkillsGrid