import useGetTrailer from '../hooks/useGetTrailer'

const VideoBackground = ({ id }) => {
    const trailerID = useGetTrailer(id);
    return (
        <div className='overflow-hidden relative sm:top-0'>
            <iframe
                class="w-screen h-screen aspect-video md:scale-x-[1.25] md:scale-y-[1.34]"
                src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=1&mute=1&vq=hd1080&loop=1`}
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen"
                allowFullScreen>
            </iframe>



        </div>

    )
}

export default VideoBackground
