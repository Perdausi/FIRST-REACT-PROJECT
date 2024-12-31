import Joblisting from "./Joblisting"
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function BrowseJob({ isHome = false }) { 
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true) 

    useEffect (()=>{
        const fetchJobs = async () => {
            const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data)
            } catch (error) {
                console.log("Error fetching data", error);
            }finally{
                setLoading(false);
            }
        }
        fetchJobs();
    },[]); 

    return(
        <section className="py-10 px-14 bg-blue-50 mt-20">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-4xl py-7 font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "All Jobs"}
                </h2>

                
                
                    {loading ? (<Spinner loading={loading} />) : 
                    (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job)=>(
                        <Joblisting key={job.id} job={job} />
                        ))}
                    </div>)
                    }
                    
                
            </div>
        </section>
    )
  }