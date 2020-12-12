import { withRouter } from "react-router-dom"
import React from "react";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)
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