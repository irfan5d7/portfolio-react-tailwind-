import React from 'react'


const SkillCard = (props) => {
    const {skName, skImg} = props.skill;
    return(
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto h-20' src={skImg} alt= {skName}/>
            <p className='my-4 h-10'>{skName}</p>
        </div>
    )
}

export default SkillCard


