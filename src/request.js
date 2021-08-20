import apikey from "./apikey"

const requests = {

    image: `https://image.tmdb.org/t/p/original`,
    movie: `https://api.themoviedb.org/3/movie`,


    trendingAll: `https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`,
    trendingMovie: `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}&language=en-US`,
    trendingTv: `https://api.themoviedb.org/3/trending/tv/week?api_key=${apikey}&language=en-US`,

    movies_topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    movies_popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    movies_upcoming: `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,

    netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213`,
    tv_topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`,
    tv_popular: `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`,
    tv_upcoming: `
    https://api.themoviedb.org/3/tv/upcoming?api_key=${apikey}&language=en-US&page=1`,

    action: `https://api.themoviedb.org/3/list/28?api_key=${apikey}&language=en-US`,
    comedy: `https://api.themoviedb.org/3/list/35?api_key=${apikey}&language=en-US`,
    crime: `https://api.themoviedb.org/3/list/80?api_key=${apikey}&language=en-US`,
    documentry: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=99&language=en-US`,
    fantasy: `https://api.themoviedb.org/3/list/14?api_key=${apikey}&language=en-US`,
    history: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=36&language=en-US`,
    horror: `https://api.themoviedb.org/3/list/27?api_key=${apikey}&language=en-US`,
    music: `https://api.themoviedb.org/3/list/10402?api_key=${apikey}&language=en-US`,
    mystery: `https://api.themoviedb.org/3/list/9648?api_key=${apikey}&language=en-US`,
    scify: `https://api.themoviedb.org/3/list/878?api_key=${apikey}&language=en-US`,
    thriller: `https://api.themoviedb.org/3/list/53?api_key=${apikey}&language=en-US`,
    war: `https://api.themoviedb.org/3/list/10752?api_key=${apikey}&language=en-US`,

    romance: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=10749`
}

export default requests