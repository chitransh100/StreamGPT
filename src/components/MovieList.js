import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import ShimmerList from './ShimmerList';

const MovieList = ({ movieList, Title }) => {
    if (!movieList)
        return <ShimmerList />
    return (
        <div className=''>
            < div className='bg-transparent text-white font-b md:text-xl mb-4 md:w-72 px-2 md:pl-7 rounded-r-lg font-semibold' >
                {Title}
            </div >
            <div className='overflow-x-scroll w-full flex gap-1 md:p-2 scroll-smooth pb-10 '>
                {movieList?.map((e) => {
                    return (
                        <div key={e.id} className='flex-shrink-0 w-52'>
                            <Link key={e.id} to={"/movie/" + e.id} >
                                <MovieCard key={e.id} movie={e} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >


    )
}

export default MovieList
