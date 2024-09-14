import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utilities/localstorage";
import JobsCategory from "../JobsCategory/JobsCategory";
import { string } from "prop-types";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedjobs, setappliedjobs] = useState([]);
  const [displayjobs, setdisplayjobs] = useState([]);

  const handeljobfilter = (filter) => {
    if (filter === "all") {
      setdisplayjobs(appliedjobs);
    } else if (filter === "remote") {
      const remote = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setdisplayjobs(remote);
    } else if (filter === "onsite") {
      const onsite = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setdisplayjobs(onsite);
    }
  };

  useEffect(() => {
    const storedJobsId = getStoredApplication();

    if (jobs.length > 0) {
      const jobsapplied = jobs.filter((job) => {
        return storedJobsId.includes(job.id);
      });
      setappliedjobs(jobsapplied);
      setdisplayjobs(jobsapplied);
    }
  }, []);

  return (
    <div>
      <details className="dropdown ml-24">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a onClick={() => handeljobfilter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => handeljobfilter("remote")}>Remote</a>
          </li>
          <li>
            <a onClick={() => handeljobfilter("onsite")}>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayjobs.map((job) => (
          <li>
            {job.company_name} : {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
