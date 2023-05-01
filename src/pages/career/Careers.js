import React from "react";
import { useLoaderData, Link } from "react-router-dom";
function Careers() {
  const carrers = useLoaderData();
  return (
    <div className="scrollable-container">
      {carrers.map((n, index) => {
        return (
          <div key={index} className="job-display">
            <Link to={`${n.id}`}>{n.title}</Link>
            <p>{n.location}</p>
          </div>
        );
      })}
    </div>
  );
}
//loader
export async function carrerloader() {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("could not find that carrer");
  }
  return res.json();
}

export default Careers;
