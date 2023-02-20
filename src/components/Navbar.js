import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () =>{
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg bg-blue-800 text-gray-300'>
      {/* main menu  */}
      <div>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Home</li>
        </ul>
      </div>
      <div onClick={handleClick} class='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-blue-700 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
          <li className='py-6 text-4xl'>Home</li>
        </ul>
        {/* Social  */}
        <div className='hidden md:flex flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/irfan-ahmed-mohd/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          {/* Leetcode  */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://leetcode.com/irfanahmed/'
            >
              LeetCode <SiLeetcode size={30} />
            </a>
          </li>
          {/* Hacker rank  */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.hackerrank.com/IrfanAhmed5d7'
            >
              HackerRank <FaHackerrank size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.github.com/irfan5d7'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          


          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar