import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import RootLayout from "./Layout/RootLayout.js";
import HelpLayout from "./Layout/HelpLayout.js";
import Faq from "./pages/help/Faq.js";
import Contact from "./pages/help/Contact.js";
import Page404 from "./pages/Page404.js";
import CareersLayout from "./Layout/CareersLayout.js";
import Careers, { carrerloader } from "./pages/career/Careers.js";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/career/CareerDetails.js";
import CarrerError from "./pages/career/CarrerError.js";
// import { useEffect, useState } from "react";
const App = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/careers")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  // console.log(data);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={carrerloader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
            errorElement={<CarrerError />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
