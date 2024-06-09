 import { useLoaderData, useParams } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { saveJobApllication } from "../../../Utility/localStorage";

 
const JobDetails = () => {
    const jobs =useLoaderData();
    const {id}= useParams();
    const idInt =parseInt (id);
    const job = jobs.find(job =>job.id ===idInt);
    console.log(job);

    // tostaed This is AAA 

    const handleApplyjob =()=>{
        saveJobApllication(idInt);
        toast('you have applied successfully')
    }
    return (
        <div>
            <h1 className="text-3xl ">Job Details of :{job.job_title} </h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-xl">{job.job_description}</h2>
                    <div>
                        <h1 className="text-black text-2xl gap-3">jobResponsibility:
                            {job.job_responsibility}</h1>
                    </div>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side thing</h2>
                    <button
                    onClick={handleApplyjob }
                     className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;