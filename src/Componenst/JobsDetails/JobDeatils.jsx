import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobsApplications } from "../../Utilities/localstorage";

const JobDeatils = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  const handleApply = () => {
    saveJobsApplications(intId);

    toast("🦄 Wow so easy!");
  };
  const {
    company_name,
    educational_requirements,
    experiences,
    contact_information,
    job_description,
    job_responsibility,
    job_title,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;

  return (
    <div className="py-4">
      <div className="bg-red-700 p-4"></div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="col-span-3">
          <section className="space-y-6">
            <h1>
              <strong>Job Description: </strong>
              {job_description}
            </h1>
            <h1>
              <strong>Job Responsibility: </strong>
              {job_responsibility}
            </h1>
            <div className="space-y-5">
              <h1>
                <strong>Educational Requirements: </strong>
              </h1>
              <p>{educational_requirements}</p>
            </div>
            <div className="space-y-5">
              <h1>
                <strong>Experiences: </strong>
              </h1>
              <p>{experiences}</p>
            </div>
          </section>
        </div>
        <div className="">
          <div className="">
            <div className="bg-blue-200 p-3 text-[14px] rounded">
              <div>
                <h1 className="font-medium">Job Details</h1>
                <hr className="mt-3" />
              </div>
              <div className="mt-2 space-y-3">
                <h1 className="flex items-center gap-1">
                  <HiOutlineCurrencyDollar className="text-blue-600" />
                  <span className=""> Salary:</span> {salary}
                </h1>
                <h1 className="flex items-center gap-1 ">
                  <IoCalendarClearOutline className="text-blue-600" />
                  <span className=" "> Job Title:</span> {job_title}
                </h1>

                <h1 className="font-medium mt-4">Contact Information</h1>
                <hr className="mt-2" />
              </div>
              <div className="space-y-3 mt-2">
                <h1 className="flex items-center gap-1">
                  <FiPhone className="text-blue-600 " />
                  <span className="font-medium"> Phone:</span>
                  {contact_information.phone}
                </h1>
                <h1 className="flex items-center gap-1">
                  <MdOutlineMail className="text-blue-600 " />
                  <span className="font-medium"> Email:</span>
                  {contact_information.email}
                </h1>
                <div className="flex flex-row gap-1 items-start">
                  <div className="flex gap-1 items-center">
                    <SlLocationPin className="text-blue-600" />
                    <span className="font-medium"> Adress: </span>
                  </div>
                  <h1>{contact_information.address}</h1>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleApply}
                className="bg-blue-500 rounded p-3 text-white mt-4 w-full"
              >
                Apply Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDeatils;
