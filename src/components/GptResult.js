import React from 'react'
import MovieList from './MovieList'

const GptResult = ({ searchedMovieList }) => {

    return (
        <div className='w-screen absolute left-0 top-1/3 max-h-screen p-5'>
            {searchedMovieList.length != 0 && (
                <div className='bg-black bg-opacity-70 overflow-y-auto max-h-[75vh] rounded-lg shadow-2xl p-2 md:p-8'>
                    <p className='text-white md:text-4xl font-extrabold text-center mb-8'>
                        Results
                    </p>
                    {searchedMovieList?.map((movieArray, index) => {
                        return movieArray.length !== 0 && (
                            <div key={index} className="mb-6">
                                <MovieList
                                    movieList={movieArray}
                                    Title={movieArray[0]?.original_title}
                                    className="mb-4"
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>


    )
}
export default GptResult;
