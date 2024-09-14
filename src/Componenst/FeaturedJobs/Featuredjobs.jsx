import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featuredjobs = () => {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);
  const [datalegth, setdataLegth] = useState(4);

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-4xl">Featured Jobs</h1>
        <p className="text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-11">
        {jobs.slice(0, datalegth).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="mt-4">
        <div className={datalegth == jobs.length ? "hidden" : "text-center"}>
          <button
            onClick={() => setdataLegth(jobs.length)}
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuredjobs;
