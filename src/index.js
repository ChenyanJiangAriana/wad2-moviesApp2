import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import HomePage from "./pages/homePage";
// import MoviePage from './pages/movieDetailsPage';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
// import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
// import MovieReviewPage from "./pages/movieReviewPage";
// import SiteHeader from './components/siteHeader';
// import UpcomingMoviePage from './pages/UpcomingMoviePage';
// import MoviesContextProvider from "./contexts/moviesContext";
// import GenresContextProvider from "./contexts/genresContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage';
// import WatchListMoviesPage from './pages/watchListMoviesPage';
// import TopRatedMoviesPage from './pages/topRatedMoviesPage';
// import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
// import TemporaryDrawer from './components/nav';
// import SlideNowPlaying from './components/slideNowPlaying';
//import './login/node_modules/bootstrap/dist/css/bootstrap.min.css'
//import NewFilterButton from './components/newFilterButton';
import LoginApp from "./login";

const App = () => {
  return (
      <BrowserRouter>
           <div><LoginApp/></div>
    </BrowserRouter>

  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
