
import axios from 'axios';

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
}; 
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies=() => {
    return fetch(
     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getTopRatedMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` 
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getNowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` 
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPopularPerson = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  

  export const getPerson = id => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then(res => res.json())
}

  export const getMovieCast = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
    .then(res => res.json())
    .then(json => json.cast);
}

  export const fetchNowPlayingMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` )
            const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: 'https://image.tmdb.org/t/p/original/' + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: 'https://image.tmdb.org/t/p/original/' + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
      }   
    

      export const getRecommendationsMovies = id => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
          .then(res => res.json())
          .then(json => json.results);
      };
    
      export const getMovieSimilar = id => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
          .then(res => res.json())
          .then(json => json.results);
      };

// export const fetchMovieVideo = async (id) => {
//    try{ const {data} = await axios.get(
//       `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` )
//         return data['results'][0];
//       }   catch (error) { }
//     }
    
// export const fetchMovieVideo = id => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then(res => res.json())
//     .then(json => json.results);
// };

export const fetchMovieVideo = async (id) => {
  try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
      return data['results'][0];
  } catch (error) { }
}