import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    company_name,
    logo,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  return (
    <div>
      <div className="card flex flex-col items-start card-compact  bg-base-100 border">
        <figure className="p-4">
          <img src={logo} alt="company Logo" />
        </figure>
        <div className="card-body text-left">
          <h1 className="card-title">{job_title}</h1>
          <h1 className="text-gray-500">{company_name}</h1>
          <div className="">
            <button className="border rounded-md border-blue-600 p-2 font-semibold text-blue-600 mr-4">
              {remote_or_onsite}
            </button>
            <button className="border rounded-md border-blue-600 p-2 font-semibold text-blue-600">
              {job_type}
            </button>
          </div>
          <div className="flex gap-2 text-gray-500">
            <h1 className="flex gap-1 items-center ">
              <IoLocationOutline /> {location}
            </h1>
            <h1 className="flex gap-1 items-center">
              <HiOutlineCurrencyDollar />
              Salary: {salary}
            </h1>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
