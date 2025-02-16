import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({ title, overview, movieId, movie }) => {
    return (
        <div className='md:p-32 w-full p-10 md:h-screen h-[80%] absolute  z-10 text-white bg-gradient-to-r from-black ' >
            <div className='absolute bottom-44 w-1/3 '>
                <h1 className='md:font-bold md:text-5xl text-2xl md:py-10 md:pb-16  '>{title}</h1>
                <p className='md:block hidden'>{overview}</p>
                <Link to={"/movie/" + movieId} >
                    <div className='flex my-3'>
                        <button className='w-full  mr-4 md:font-semibold bg-white text-black rounded-lg  md:p-4 hover:bg-opacity-80' >
                            Play</button>
                        <button className='w-full mr-2 bg-gray-600 rounded-lg text-white hover:bg-opacity-75 p-4 md:block hidden'>More Info </button>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default VideoTitle
