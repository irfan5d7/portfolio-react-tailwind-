import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from "react-icons/si"
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../assets/resume/Irfan Ahmed Mohammad.pdf'
import dp from '../assets/resume/mrnd.jpeg'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () =>{
    setNav(!nav)
  }
  return (
    <div className='fixed z-50 w-full h-20 flex justify-between items-center px-4 bg bg-[#0a182d] text-gray-300 shadow-md shadow-[#040c16]'>
      <div>
        <img src={dp} alt='dp' class="h-20 mr-3 sm:h-9 rounded-lg" />
      </div>
      {/* main menu  */}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to='education' smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} class='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
        {/* Social  */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
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
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E6A31F]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://leetcode.com/irfanahmed/'
            >
              LeetCode <SiLeetcode size={30} />
            </a>
          </li>
          {/* Hacker rank  */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3BC262]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.hackerrank.com/IrfanAhmed5d7'
            >
              HackerRank <FaHackerrank size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
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
              href={Resume}
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