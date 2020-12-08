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
import 'bootstrap/dist/css/bootstrap.min.css'
import NewFilterButton from '../components/newFilterButton';
import RecommendationsPage from  '../pages/RecommendationsPage';
//import ReactStars from "react-rating-stars-component";
//import withRouter from 'react-router-dom';
//import ReactDOM from "react-dom";
//import PrivateRouter from "../pages/PrivateRouter";
export const Hero =({handleLogout})=>{
    return(
<div>
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
                 <Route path="/movies/recommendations/:id" component={RecommendationsPage} />
                 <Route path="/" component={HomePage} />
                 <Redirect from="*" to="/" />
              </Switch>
           </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>     {/* NEW */}

        </div>
      </div>
    </BrowserRouter>
<div className="row mt-3 mb-5">
 <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
  <h3>ABOUT ME</h3>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
    error earum perspiciatis praesentium sint ipsum provident blanditiis
    pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
    culpa cupiditate placeat facilis repellat.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
    perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
    dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
    earum?
  </p>
  <ul className="list-inline">
    <li className="list-inline-item">
      <a href="/" style={{ color: "#f4c10f" }}>
        <i className="fab fa-facebook"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="/" style={{ color: "#f4c10f" }}>
        <i className="fab fa-youtube"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="/" style={{ color: "#f4c10f" }}>
        <i className="fab fa-twitter"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="/" style={{ color: "#f4c10f" }}>
        <i className="fab fa-instagram"></i>
      </a>
    </li>
  </ul>
</div>
<div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
  <h3>KEEP IN TOUCH</h3>
  <ul className="list-unstyled">
    <li>
      <p>
        <strong>
          <i className="fas fa-map-marker-alt"></i> Address:
        </strong>{" "}
        city, state, country
      </p>
    </li>
    <li>
      <p>
        <strong>
          <i className="fas fa-map-marker-alt"></i> Phone:
        </strong>{" "}
        +01 00 00 00
      </p>
    </li>
    <li>
      <p>
        <strong>
          <i className="fas fa-envelope"></i> Email:
        </strong>{" "}
        info@infomail.com
      </p>
    </li>
  </ul>
</div>
</div> 


</div>
);
};


export default Hero;
