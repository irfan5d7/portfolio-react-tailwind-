import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from '@material-tailwind/react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SlCalender } from "react-icons/sl"

const College = (props) => {
    const {clgImg,clgName,degree,major,clgLocation,clgDuration, activities} = props.clg;
    return (
        <div>
            <Card className="w-full h-auto bg-[#0e2432] shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-white">
                <CardHeader  className="relative h-[100px] w-[100px] ">
                    <img
                    src={clgImg}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center bg-[#0e2432] h-52">
                    <p className='flex text-xl font-bold'>{clgName}</p>
                    <p className='flex text-m text-gray-300'>{degree} in {major}</p>
                    { activities.map((acti,indx) => (
                        <li className='list-disc text-left text-s text-gray-500' key ={indx} >{acti}</li>
                        ))
                    }
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small" className="flex p-1 gap-1"><SlCalender  size={20}/> {clgDuration}</Typography>
                    <Typography variant="small" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    <HiOutlineLocationMarker /> {clgLocation}
                    </Typography>
                </CardFooter>
        </Card>
        </div>
      )
  
}

export default College

