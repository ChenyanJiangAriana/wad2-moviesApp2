import React,{useState, useEffect} from "react";
import RBCarousel from "react-bootstrap-carousel";
import { fetchMovies } from "../../api/tmdb-api";
import {withRouter} from "react-router-dom";

export function SlideLatest() {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(()=> {
        const fetchAPI = async() =>{
            setNowPlaying(await fetchMovies());
        };
      //  console.log("nowplaying.....",nowPlaying);
      //  console.log("fetchapi.....",fetchAPI);
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const movies = nowPlaying.slice( 0, 5 ).map((item, index) => {
        return(
            <div key={index}>
                <div className ="carousel-center">
                    <img style={{height:600}} src={item.backPoster} alt ={item.title}/>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <RBCarousel
                         autoplay= {true}
                         pauseOnVisibility={true}
                         slideshowSpeed ={5000}
                         version={4}
                         indicators={false}
                     >
                         {movies}    
                    </RBCarousel>
                </div>
            </div>
        </div>
    )
}export default withRouter(SlideLatest);