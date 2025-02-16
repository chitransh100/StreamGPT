import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNOWPLAYING = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTION);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
        // console.log(json);
    }
    useEffect(() => {
        getNOWPLAYING();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
export default useNowPlaying;