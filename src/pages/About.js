import { Outlet, Link } from "react-router-dom";
import ProfileClassComp from "../components/Profile";

function About() {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>About Page</h1>
      {/* <Outlet /> */}
      <ProfileClassComp name="Krishna" />
    </div>
  );
}

export default About;
