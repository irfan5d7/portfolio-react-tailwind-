import React from 'react'


const SkillCard = (props) => {
    const {skName, skImg} = props.skill;
    return(
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={skImg} alt= {skName}/>
            <p className='my-4'>{skName}</p>
        </div>
    )
}

export default SkillCard


