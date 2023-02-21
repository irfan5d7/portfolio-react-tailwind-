import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from '@material-tailwind/react'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';



const Project = (props) => {
    const {name, title, img, location, duration, techStack} = props.proj;
  return (
    <div>
        <Card className="w-full h-auto bg-[#0e2432] shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-white">
            <CardHeader  className="relative h-[100px] w-[100px] ">
                <img
                src={img}
                alt="img-blur-shadow"
                className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center bg-[#0e2432] lg:h-32 md:h-40 sm:h-fit">
                <p className='flex text-xl font-bold'>{name}</p>
                <p className='flex text-m text-gray-300'>{title}</p>
                <p className='flex text-xs text-left  text-gray-500'>TechStack : {techStack.join(", ")}</p>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3 h-fit">
            <Typography variant="small" className="flex p-1 gap-1"><SlCalender  size={20}/> {duration}</Typography>
                <Typography variant="small" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                <HiOutlineLocationMarker />{location}
                </Typography>
            </CardFooter>
    </Card>
    </div>
  )
}

export default Project

