import React from "react";
import HeaderPerson from '../headerPerson'
import "./personPage.css";

const TemplatePersonPage = ({ person,children }) => {
   // Get the gender
   let gender = "Unknown"
   switch (person.gender) {
     case 0:
       gender = "Unknown";
       break;
     case 1:
       gender = "Female";
       break;
     case 2:
       gender = "Male";
       break;
     case 3:
       gender = "Non-Binary";
       break;
     default:
       break;
   }
  return (
    <>
    <HeaderPerson person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.poster_path
                ? `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
        <div className="col-9">{children}</div>
        </div>

        <div className="col-9">
          <h4>{person.name}</h4>
          <ul className="list-group list-group-horizontal">
            <li key="ruh" className="list-group-item list-group-item-dark">
              Gender
            </li>
            <li key="rut" className="list-group-item ">
              {gender}
            </li>

            <li key="ruh" className="list-group-item list-group-item-dark">
            Known for Department
            </li>
            <li key="rut" className="list-group-item ">
              {person.known_for_department}
            </li>
          </ul>
          
        </div>
       
      
    </>
  );
};

export default TemplatePersonPage;