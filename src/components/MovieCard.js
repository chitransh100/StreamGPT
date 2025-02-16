import React from 'react'
import { POSTER_IMG } from '../utils/constants';

const MovieCard = ({ movie }) => {
    const { poster_path } = movie
    if (!poster_path)
        return
    return (
        <div className=' text-center md:w-44 md:px-4 cursor-pointer mt-6'>
            {/* <p className='h-12 font-light'>{original_title}</p> */}
            <div className='hover:-translate-y-5 hover:scale-110 transition'>
                <img className='md:w-56 w-40 md:h-56 object-contain' src={POSTER_IMG + poster_path} alt="" />
            </div>
        </div>

    )
}

export default MovieCard;
