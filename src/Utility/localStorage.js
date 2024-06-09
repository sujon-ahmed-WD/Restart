const getStrodedJobAplication =()=>{
    const  strodedJobAplication =localStorage.getItem('job-application');
    if(strodedJobAplication){
        JSON.parse(strodedJobAplication);

    }
    return[];
}
const saveJobApllication = id =>{
    const storedJobApplications =getStrodedJobAplication();
    const exists =storedJobApplications.find(jobId =>jobId ===id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
    }
}
export{getStrodedJobAplication,saveJobApllication}