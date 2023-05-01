import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorCareerDetails() {
  const error = useRouteError();
  return (
    <div>
      <h3>Error</h3>
      <p>{error.message}</p>
      <Link to="/">HomePage</Link>
    </div>
  );
}

export default ErrorCareerDetails;
