import { useEffect } from "react";
import { useState } from "react";
 import Jov from "./Job/Jov";

 
const Featured  = () => {
    const[jobs,setjob]=useState([]);
    // this is not best way to load show all data 
    const[dataLength,setLength]= useState(4);
             
 
    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setjob(data))
    },[])
    return (
        <div>
              <div>
        <h1 className="text-4xl text-cyan-600 text-center  ">Featured jobs : {jobs.length}</h1>
        <p className="text-xl text-center text-green-300">Explore thousands of job opportunities with all the information you need. Its your future</p>
       </div>
       <div className="grid grid-cols-2 gap-4">
       {
        jobs.slice(0,dataLength)  .map(suj=><Jov key={suj.id} suj={suj}></Jov>)
       }
       </div>
       <div className={dataLength === jobs.length && 'hidden'}>
       <button
       onClick={()=>setLength(jobs.length)}
        className="btn btn-outline btn-secondary">See All Jobs</button>
       </div>
        </div>

      
       

    );
};

export default Featured ;