import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <div>
      <h3>Carrer Detail details for {career.title} </h3>
      <p>Starting Salaray: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem epsum kajsdha ksdha kjashd kjasdh kasj dhka sdhakdhak jda
          skjdaksjdhaksjdhaksd hkasjdkajshdka jsdhkasjh akj
        </p>
      </div>
    </div>
  );
}
//loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("could not find that carrer");
  }
  return res.json();
};
