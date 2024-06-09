import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrodedJobAplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayjobs, setDisplayJobs] = useState([]);

  const handleJobsFilter =filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
        const remoteJobs =appliedJobs.filter(job =>job.remote_or_onsite ==='Remote');
        setDisplayJobs(remoteJobs)
    }
    else if(filter ==='onsite'){
        const onsiteJobs =appliedJobs.filter(job =>job.remote_or_onsite ==='onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStrodedJobAplication();
    if (jobs.length > 0) {
      // const jobsApplied =jobs.filter(job => storedJobIds.includes(job.id));
      // console.log(jobs,storedJobIds,jobsApplied)
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      // console.log(jobs,storedJobIds,jobsApplied)
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h1 className="text-2xl">I am a Jobs: {appliedJobs.length} </h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter(' onsite')}><a>onsite</a></li>
        </ul>
      </details>

      <ul>
        {
       displayjobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
