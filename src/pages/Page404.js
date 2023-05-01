import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404">
      <h2>Page not found!</h2>
      <Link to="/">HomePage</Link>
      <img
        className="rowerek"
        alt="rowerek"
        src="https://hips.hearstapps.com/hmg-prod/images/fear-crash-feature-1491929731.jpg"
      />
    </div>
  );
}
export default Page404;
