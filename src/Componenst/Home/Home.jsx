import React from "react";
import Banner from "../Banner/Banner";
import JobsCategory from "../JobsCategory/JobsCategory";
import Featuredjobs from "../FeaturedJobs/Featuredjobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <JobsCategory />
      <Featuredjobs />
    </div>
  );
};

export default Home;
