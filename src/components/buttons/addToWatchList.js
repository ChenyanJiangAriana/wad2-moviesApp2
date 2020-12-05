import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import Button from "@material-ui/core/Button";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWathchListButton = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  
  return (    
  <Button variant="contained" color="primary"
      onClick={handleAddToWathchListButton}
    >
      Add to Watch List 
    </Button>
  );
};

export default AddToWatchListButton;
//ReactDOM.render(<AddToWatchListButton/>,document.querySelector("AddToWatchListButton"))