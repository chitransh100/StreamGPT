import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import useNowPlaying from '../hooks/useNowPlaying'
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import MoviePage from './MoviePage';

const Browse = () => {
    const navigate = useNavigate();
    const showgpt = useSelector(store => store.gpt.showgpt)
    useNowPlaying();
    return (
        <div className=''>
            <Header />
            <MainContainer />
            <SecondaryContainer />

        </div>
    )
}

export default Browse
