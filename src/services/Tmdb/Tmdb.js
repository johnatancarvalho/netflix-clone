const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdbFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  return req.json();
};

const tmdb = {
  getHomeList: async () => [
    {
      slug: "originals",
      title: "Netflix Originals",
      items: await tmdbFetch(
        `/discover/tv?with_network=213&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recommended for you",
      items: await tmdbFetch(`/trending/all/week?api_key=${API_KEY}`),
    },
    {
      slug: "toprated",
      title: "Popular on Netflix",
      items: await tmdbFetch(`/movie/top_rated?api_key=${API_KEY}`),
    },
    {
      slug: "action",
      title: "Action & adventure",
      items: await tmdbFetch(
        `/discover/movie?with_genres=28&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedies",
      items: await tmdbFetch(
        `/discover/movie?with_genres=35&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Horror movies",
      items: await tmdbFetch(
        `/discover/movie?with_genres=27&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romantic movies",
      items: await tmdbFetch(
        `/discover/movie?with_genres=10749&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentaries",
      items: await tmdbFetch(
        `/discover/movie?with_genres=99&api_key=${API_KEY}`
      ),
    },
  ],
};

export default tmdb;
