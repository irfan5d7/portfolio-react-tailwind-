import React from 'react'

import { skillsData } from "../data/skillsData";
import SkillSGrid from './SkillSGrid';


const Skills = () => {
    const {pl, flstck, devops } = skillsData;
    return (
        <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Skills
                    </p>
                </div>
            </div>
            <div className='bg-[#0a192f]'>
                <SkillSGrid ob = {pl} desc= "/ Programming Languages I've worked with"/>
                <SkillSGrid ob = {flstck} desc = "/ Full Stack Technologies and Frameworks" />
                <SkillSGrid ob = {devops} desc = "/ DevOps Tools and Technologies" />
            </div>
        </div>
      );
}

export default Skills