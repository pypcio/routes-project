import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function CarrerError() {
  const error = useRouteError();
  return (
    <div>
      <h3>Error</h3>
      <p>{error.message}</p>
      <Link to="/">HomePage</Link>
    </div>
  );
}
