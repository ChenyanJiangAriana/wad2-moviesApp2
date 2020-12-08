import { Link, Route, withRouter } from "react-router-dom"
import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templatePersonPage";
import getPerson from "../hooks/getPerson";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = getPerson(id)
  return (
    <>
    {person ?  (
        <>
          <PageTemplate person={person}>
          </PageTemplate>
       </>
    )
    : 
    (
        <p>Waiting for person details </p>
    )
    }
    </>
  );
};

export default withRouter(PersonPage);