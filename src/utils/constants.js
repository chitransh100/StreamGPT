export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};
export const POSTER_IMG = "https://image.tmdb.org/t/p/w780/";
export const POPULAR_MOVIE = 'https://api.themoviedb.org/3/movie/popular?&page=2'
export const UPCOMINGMOVIE = 'https://api.themoviedb.org/3/movie/upcoming?&page=1'
export const TOPRATED = 'https://api.themoviedb.org/3/movie/top_rated?&page=2'
export const BGURL = 'https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg'
//best practice for languages 
export const SUPPORTEDLANGUAGES = [
    { identifier: "english", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "french", name: "French" },
    { identifier: "jp", name: "Japanese" },
];

//keep it secret don't push it to git hub 

export const API_KEY = process.env.REACT_APP_GEMINI_KEY
