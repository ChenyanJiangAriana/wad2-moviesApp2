import { useEffect, useState } from "react";
import {getUpcomingMovie} from '../api/tmdb-api'

const useUpcomingMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getUpcomingMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useUpcomingMovie;