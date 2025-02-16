import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import { API_OPTION, POPULAR_MOVIE, TOPRATED, UPCOMINGMOVIE } from '../utils/constants'

const SecondaryContainer = () => {
    const NowPlaying = useSelector(store => store.movies?.nowPlaying)
    const [PopularMovie, setPopularMovie] = useState([]);
    const [TopRated, setTopRated] = useState([]);
    const [Upcoming, setUpcoming] = useState([]);
    const getMovies = async () => {
        const populars = await fetch(POPULAR_MOVIE, API_OPTION)
        const popularJson = await populars.json();
        setPopularMovie(popularJson.results)
        const TopRated = await fetch(TOPRATED, API_OPTION)
        const topratejson = await TopRated.json();
        setTopRated(topratejson.results)
        const Upcoming = await fetch(UPCOMINGMOVIE, API_OPTION)
        const upcomingjson = await Upcoming.json();
        setUpcoming(upcomingjson.results);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div className="bg-black text-white relative  ">
            <div className="relative z-10 -top-32 md:pl-0 pl-2">
                <MovieList movieList={PopularMovie} Title="Popular Movies" />
                <MovieList movieList={Upcoming} Title="Upcoming" />
                <MovieList movieList={NowPlaying} Title="Now Playing" />
                <MovieList movieList={TopRated} Title="Top Rated" />
            </div>
        </div>

    )
}

export default SecondaryContainer
