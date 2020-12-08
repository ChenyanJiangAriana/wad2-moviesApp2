import React from "react";
import "./personPage.css";

const TemplatePersonPage = ({ person }) => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.poster_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
      </div>
    </>
  );
};

export default TemplatePersonPage;