import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Jov = ({suj}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,salary,job_type}=suj;
    return (
<div className="card   bg-base-100 shadow-xl">
  <figure><img src={logo}/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {company_name}
      <div className="badge badge-secondary text-[20px]">{ job_title}</div>
    </h2>
     
    <div className="card-actions  ">
    <button className="btn btn-outline btn-accent">{remote_or_onsite}</button>
    <button className="btn btn-outline btn-accent">{job_type}</button>

       
    </div>
    
    <div className="flex gap-[210px]">

    <div className="flex gap-4">
        <div className="text-[25px]" >
        <FaLocationDot />
        </div>
        {location}
    </div>
    <div className="flex ">
        <div className="text-[30px]">
        <TbCoinTaka />
        </div>
        {salary}
    </div>
    </div>

    <div>
       <Link to={`/job/${id}`}>
       <button class="btn btn-success">Show All</button>
       </Link>
        
    

    </div>
  </div>
</div>
    );
};

export default Jov;