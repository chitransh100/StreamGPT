import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_OPTION } from '../utils/constants'; // Import your API options
import { FaImdb, FaStar } from 'react-icons/fa';

const MoviePage = () => {
    const [movieData, setMovieData] = useState({});
    const [trailerUrl, setTrailerUrl] = useState('');
    const { movieid } = useParams();

    const getMovieInfo = async () => {
        try {
            const movieDesc = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US&append_to_response=videos`, API_OPTION);
            const movieJson = await movieDesc.json();
            console.log(movieJson);
            setMovieData(movieJson);

            // Get the YouTube trailer (if available) from the movie videos data
            const trailer = movieJson.videos?.results?.find(
                (video) => video.type === 'Trailer' && video.site === 'YouTube'
            );
            if (trailer) {
                setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    useEffect(() => {
        getMovieInfo();
    }, [movieid]);

    const {
        backdrop_path,
        poster_path,
        title,
        original_title,
        overview,
        release_date,
        runtime,
        tagline,
        vote_average,
        vote_count,
        imdb_id,
    } = movieData;

    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image+Available';
    const backdropUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : '';
    const imdbUrl = imdb_id ? `https://www.imdb.com/title/${imdb_id}/` : '#';

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Backdrop Section */}
            {backdrop_path && (
                <div
                    className="relative h-96"
                    style={{ backgroundImage: `url(${backdropUrl})`, backgroundSize: 'cover' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl font-bold">{title}</h1>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster Image */}
                    <div className="md:w-1/3 flex justify-center">
                        <img src={posterUrl} alt={title} className="rounded-lg shadow-lg" />
                    </div>

                    {/* Movie Details */}
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold">{original_title}</h2>
                        {tagline && <p className="text-xl text-gray-400 mt-2 italic">{tagline}</p>}

                        <div className="flex items-center mt-4 text-yellow-500">
                            <FaStar className="mr-2" />
                            <span className="font-bold text-lg">{vote_average ? `${vote_average}/10` : 'N/A'}</span>
                            <span className="text-gray-400 ml-2">({vote_count ? `${vote_count} votes` : 'No votes'})</span>
                            <a href={imdbUrl} target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-300 hover:text-yellow-500">
                                <FaImdb size={30} />
                            </a>
                        </div>

                        <p className="mt-6 text-gray-300 leading-relaxed">{overview || 'No overview available.'}</p>

                        <div className="mt-4 text-gray-400">
                            <p><strong>Release Date:</strong> {release_date || 'N/A'}</p>
                            <p><strong>Runtime:</strong> {runtime ? `${runtime} minutes` : 'N/A'}</p>
                        </div>

                        {/* Trailer Section */}
                        {trailerUrl && (
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-4">Watch Trailer</h3>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={trailerUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
