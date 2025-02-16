import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constants";

const useGetTrailer = (id) => {
    const [trailerID, setTrailerID] = useState(null);
    //or we can use redux store instead of useState
    const getVideo = async () => {
        const video = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos", API_OPTION);
        const json = await video.json();
        const filterTrailers = json.results.filter((vid) => {
            return vid.type === "Trailer"
        })
        const trailer = filterTrailers.length ? filterTrailers[0] : json?.results[0];
        setTrailerID(trailer.key)
    }
    useEffect(() => {
        getVideo()
    }, [])
    return trailerID;
}
export default useGetTrailer;