import React,{useState, useEffect} from 'react'
import { leetCode_api, tempdata, user_name } from '../../data/constants';
import { SiLeetcode } from "react-icons/si"

const Leetcode = () => {
    const [data, setData] = useState(tempdata);

    const getPercent = (num,denom) => {
    
      const percent = Math.round((num/denom)*100)
      return percent
    };

    useEffect(() => {
        getLeetCodeStats();
      }, []);
    
      async function getLeetCodeStats() {
        try {
          const response = await fetch(leetCode_api);
          const data = await response.json();
        setData(data)
        } catch (error) {
          console.log(error);
        }
      }
    return (
      <div>
        <div className='h-[300px] sm:w-fit grid grid-cols-2 sm:grid-cols-1 gap-10 text-center py-8 bg-[#0a192f] shadow-md hover:scale-110 duration-500 text-white shadow-[#040c16]'>
          <div class="sm:w-[600px] grid grid-rows-3 grid-flow-col gap-2 ">
            <div class="col-span-2 ... flex">
              <span className='flex-2 h-10 w-10 mx-2' ><SiLeetcode size={40} /></span>
              <a href='https://leetcode.com/IrfanAhmed/' className='flex-1 py-1 text-green link-hover'>{user_name}</a>
            </div>
            <div class="row-span-2 col-span-2 ... flex-auto py-8">
              <span className="radial-progress" style={{"--value": getPercent(data?.totalSolved,data?.totalQuestions) }}>{data?.totalSolved}</span>
            </div>
            <div class="row-span-3 ...">
              <ul className='py-6'>
                <li>
                  <div>
                    <span className='flex float-left'>Rank</span>
                    <span className='flex float-right'>#{data?.ranking}</span>
                  </div>
                  <progress className="progress progress-success w-56" value="0" max="100"></progress>
                </li>
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
    )
}

export default Leetcode




