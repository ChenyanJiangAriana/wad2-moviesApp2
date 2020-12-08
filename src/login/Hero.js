import React from "react";
//import "src/node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "../pages/homePage";
import MoviePage from '../pages/movieDetailsPage';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from '../pages/favoritesMoviesPage';       // NEW
import MovieReviewPage from "../pages/movieReviewPage";
import SiteHeader from '../components/siteHeader';
import UpcomingMoviePage from '../pages/UpcomingMoviePage';
import MoviesContextProvider from "../contexts/moviesContext";
import GenresContextProvider from "../contexts/genresContext";
import AddMovieReviewPage from '../pages/addMovieReviewPage';
import WatchListMoviesPage from '../pages/watchListMoviesPage';
import TopRatedMoviesPage from '../pages/topRatedMoviesPage';
import NowPlayingMoviesPage from '../pages/nowPlayingMoviesPage';
import TemporaryDrawer from '../components/nav';
import SlideNowPlaying from '../components/slideNowPlaying';
//import 'bootstrap/dist/css/bootstrap.min.css'
import NewFilterButton from '../components/newFilterButton';
//import withRouter from 'react-router-dom';
//import ReactDOM from "react-dom";
//import PrivateRouter from "../pages/PrivateRouter";
export const Hero =({handleLogout})=>{
    return(
    <BrowserRouter>
      <div>  
      <SiteHeader/>
      <nav>
          <section className ="hero">
                 <h2>welcome</h2><h2> <TemporaryDrawer/></h2>
                 <button onClick={handleLogout}>Logout</button>

            <p><SlideNowPlaying/>
            <NewFilterButton/></p>
          </section>  
          
       </nav> 
      </div>
      <div className="jumbotron">
         {/* New Header  */}
        <div className="container-fluid">
     
          <MoviesContextProvider>     {/* NEW  */}
            <GenresContextProvider>    {/* NEW */}
              <Switch>
                 <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
                 <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                 <Route path="/reviews/:id" component={MovieReviewPage} />
                 <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                 <Route path="/movies/nowPlaying" component={NowPlayingMoviesPage} />
                 <Route path="/movies/topRated" component={TopRatedMoviesPage} />
                 <Route path="/movies/Upcoming" component={UpcomingMoviePage} />
                 <Route path="/movies/:id" component={MoviePage} />
                 <Route path="/" component={HomePage} />
                 <Redirect from="*" to="/" />
              </Switch>
           </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>     {/* NEW */}

        </div>
      </div>
    </BrowserRouter>
    );
};
export default Hero;


//ReactDOM.render(<Hero/>, document.getElementById("root"));
