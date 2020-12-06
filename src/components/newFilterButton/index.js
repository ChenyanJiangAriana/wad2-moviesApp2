import React,{useState, useEffect} from "react";
import {getGenres} from "../../api/tmdb-api";
import {withRouter} from "react-router-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";//add the arrow in each side of the slide
import "./newFilterButton.css";
export function NewFilterButton() {
    const [genres, setGenres] = useState([]);

    useEffect(()=> {
        const fetchAPI = async() =>{
            setGenres(await getGenres());
        };
      //  console.log("nowplaying.....",nowPlaying);
      //  console.log("fetchapi.....",fetchAPI);
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const genresList = genres.map((item,index) => {
        return(
            <li className="list-inline-item" key={index}>
                <button type="button" className="btn btn-outline-info">
                    {item.name}
                </button>
            </li>
        );
    });
      
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="list-inline">
                     {genresList}
                </div>
            </div>
        </div>
    )
}
export default withRouter(NewFilterButton);