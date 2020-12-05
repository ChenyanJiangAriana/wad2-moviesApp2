import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const ReviewButton = ({ movie }) => {
  return (
   <Button variant="contained" color="primary">
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
    </Button>
  );
};

export default ReviewButton;
//ReactDOM.render(<ReviewButton/>,document.querySelector("#ReviewButton"))