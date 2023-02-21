import React,{useState, useEffect} from 'react'
import { leetCode_api, tempdata, user_name } from '../data/constants';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import { SiLeetcode } from "react-icons/si"

const Leetcode = () => {
    const [status, setStatus] = useState('idle');
    const [query, setQuery] = useState('leetCode_api');
    const [data, setData] = useState(tempdata);

    const getPercent = (num,denom) => {
    
      const percent = Math.round((num/denom)*100)
      return percent
    };

    useEffect(() => {
        getLeetCodeStats();
      }, [query]);
    
      async function getLeetCodeStats() {
        try {
            setStatus('fetching');
          const response = await fetch(leetCode_api);
          const data = await response.json();
        setData(data)
        console.log(data);
        setStatus('fetched');
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div name='coding' className='w-full text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                Coding profiles
            </p>
            <p className='py-6'>// Check out my coding profiles</p>
        </div>
        <div className='h-[300px] grid grid-cols-2 sm:grid-cols-2 gap-10 text-center py-8'>
          <div class="grid grid-rows-3 grid-flow-col gap-4 bg-[#0e2432] shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-white">
            <div class="col-span-2 ...">
              <span className='flex float-left py-4 px-2 m-1'><SiLeetcode size={30} /></span>
              <span className='flex float-right p-6'>{user_name}</span>
            </div>
            <div class="row-span-2 col-span-2 ... ">
              <span className="radial-progress " style={{"--value": getPercent(data?.totalSolved,data?.totalQuestions) }}>{data?.totalSolved}</span>
            </div>
            <div class="row-span-3 ...">
              <ul className='py-10'>
                <li>
                  <div>
                    <span className='flex float-left'>Easy</span>
                    <span className='flex float-right'>{data?.easySolved} / {data?.totalEasy}</span>
                  </div>
                  <progress className="progress progress-success w-56" value={getPercent(data?.easySolved,data?.totalEasy)} max="100"></progress>
                </li>
                <li>
                  <div>
                    <span className='flex float-left'>Medium</span>
                    <span className='flex float-right'>{data?.mediumSolved} / {data?.totalMedium}</span>
                  </div>
                  <progress className="progress progress-success w-56" value={getPercent(data?.mediumSolved,data?.totalMedium)} max="100"></progress>
                  </li>
                <li>
                  <div>
                    <span className='flex float-left'>Hard</span>
                    <span className='flex float-right'>{data?.hardSolved} / {data?.totalHard}</span>
                  </div>
                  <progress className="progress progress-success w-56" value={getPercent(data?.hardSolved,data?.totalHard)} max="100"></progress>
                  </li>
              </ul>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Leetcode


 