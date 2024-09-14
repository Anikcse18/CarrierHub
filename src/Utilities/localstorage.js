const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("job_appliaction");

  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const saveJobsApplications = (id) => {
  const storedApplication = getStoredApplication();
  const exists = storedApplication.find((jobsId) => jobsId === id);

  if (!exists) {
    storedApplication.push(id);
    localStorage.setItem("job_appliaction", JSON.stringify(storedApplication));
  }
};

export { saveJobsApplications, getStoredApplication };
