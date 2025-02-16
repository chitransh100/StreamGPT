import React, { useRef, useState } from 'react'
import langSet from '../utils/langConstants';
import { useSelector } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { API_KEY } from '../utils/constants';
import GptResult from './GptResult';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptBar = () => {
    const [searchedMovieList, setsearchedMovieList] = useState([])
    const selectedlang = useSelector(store => store?.lang?.lang);
    const searchText = useRef(null);
    const handleMoviesSeach = async (movie) => {
        const movies = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=&page=1', API_OPTION)
        const moviesjson = await movies.json();
        return moviesjson?.results //promise returned
    }
    const handlesearchClick = async (e) => {
        e.preventDefault();
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Give me atmost but if description is empty then do not return anything 5 name of movies but if description invlove just ONLY movie name then return that name and nothing else ,your task is to strictly provide movies in context of description, comma separated and no space in between two movie names for given description: " + searchText.current.value + " . give in format like example shown below Avengers,Koi Mil Gaya,Krish,Dhoom,Chennai Express . ";

        try {
            const result = await model.generateContent(prompt);
            const movietext = result?.response?.candidates[0]?.content?.parts[0]?.text;

            if (movietext) {
                const aiMovies = movietext.split(",");

                if (aiMovies.length > 0) {
                    const aiMovieListPromises = aiMovies.map((movie) => handleMoviesSeach(movie.trim())); //array of promise as  asyn function
                    const aiMovieList = await Promise.all(aiMovieListPromises); //solves all promises
                    setsearchedMovieList(aiMovieList);
                } else {
                    // Handle case where no movies are returned
                    setsearchedMovieList([]);
                }
            } else {
                // Handle case where movietext is undefined or empty
                setsearchedMovieList([]);
            }
        } catch (error) {
            console.error("Error in generating movie content:", error);
            // Handle errors appropriately, e.g., show a message to the user
        }
    }


    return (
        <div>
            <div className='absolute md:left-1/4 bottom-2/3 bg-black bg-opacity-75 rounded-lg md:w-1/2 w-full left-0 md:flex-none  '>
                <form className='rounded-lg md:p-10 p-8 mx-auto justify-between flex'>
                    <input ref={searchText} type="text" className=' outline-none w-2/3 md:h-10 rounded-lg md:p-2 p-1' placeholder={langSet[selectedlang]?.gptPlaceholder} />
                    <button className='md:p-2 bg-red-600 text-white rounded-lg md:mx-6 p-2 md:text-base px-8 text-center text-xs mx-2 md:w-28 ' onClick={handlesearchClick}>{langSet[selectedlang].search}</button>
                </form>
            </div>
            {searchedMovieList?.length !== 0 && <GptResult searchedMovieList={searchedMovieList} />}

        </div >
    )
}


export default GptBar
