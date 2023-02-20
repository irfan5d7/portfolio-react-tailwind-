import React from 'react'
// pl
import Python from '../assets/python.png'
import Java from '../assets/java.png'
import JavaScript from '../assets/javascript.png';
import Scala from '../assets/scala.png'


// FS 
import ReactImg from '../assets/react.png'
import ReduxImg from '../assets/redux.png'
import Tailwind from '../assets/tailwind.png';
import MUI from '../assets/mui.png'

import Django from '../assets/django.png'
import SpringBoot from '../assets/spring.png'
import SQLImg from '../assets/sql.png'
import Mongo from '../assets/mongo.png';

// DevOps
import AWS from '../assets/aws.png'
import DockerImg from '../assets/docker.png'
import KubernetesImg from '../assets/kubernetes.png'
import Git from '../assets/git.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='bg-[#0a192f]'>
                {/* Programming Languages */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                        <p className='py-4'>// Programming Languages I've worked with</p>
                    </div>
                    {/* PL grid  */}
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Python} alt="PYTHON icon" />
                            <p className='my-4'>PYTHON</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Java} alt="JAVA icon" />
                            <p className='my-4'>JAVA</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Scala} alt="Scala icon" />
                            <p className='my-4'>Scala</p>
                        </div>
                    </div>
                </div>
                {/* FULL Stack  */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='py-4'>// Full Stack Technologies and Frameworks</p>
                </div>
                    {/* Front end  */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReduxImg} alt="Redux icon" />
                        <p className='my-4'>REDUX</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MUI} alt="MUI icon" />
                        <p className='my-4'>MATERIAL UI</p>
                    </div>
                    
                    {/* Backend  */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Django} alt="Django icon" />
                        <p className='my-4'>DJANGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SpringBoot} alt="Spring Boot icon" />
                        <p className='my-4'>SPRING BOOT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQLImg} alt="SQL icon" />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                </div>
                </div>
                {/* DevOps */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='py-4'>// DevOps</p>
                    </div>
                    {/* DevOps grid  */}
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={AWS} alt="PYTHON icon" />
                            <p className='my-4'>AWS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={DockerImg} alt="JAVA icon" />
                            <p className='my-4'>DOCKER</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={KubernetesImg} alt="JavaScript icon" />
                            <p className='my-4'>KUBERNETES</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Git} alt="Scala icon" />
                            <p className='my-4'>GIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Skills