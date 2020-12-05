import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import Button from "@material-ui/core/Button";
const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (    
  <Button variant="contained" color="primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </Button>
  );
};

export default AddToFavoriteButton;
//ReactDOM.render(<AddToFavoriteButton/>,document.querySelector("#AddToFavoriteButton"))