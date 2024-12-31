import { useState } from "react"
import { Link } from "react-router-dom"; 

export default function Joblisting({job}) {  
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;
    if(!showFullDescription){
        description = description.substring(0, 100) + '...';
    }
    
    const handleOnclick = () =>{
        setShowFullDescription((prevState)=> (!prevState));
    }
    
    return(
        <div className="bg-white rounded-2xl shadow-md ">
            <div className="p-4">
                <div className="mb-6">
                    <p className="text-gray-600 my-2">{job.type}</p>
                    <div className="text-3xl font-bold">{job.title}</div>
                </div>
                <p>{description}</p>

                <button onClick={handleOnclick} className="transition text-indigo-500 hover:text-indigo-700 py-2">{showFullDescription ? "less" : "more"}</button>

                <p className="text-indigo-400 mt-4">{job.salary}/Year</p>
                <p className="text-red-400 mt-4">{job.location}</p>
                    <div className="flex items-center justify-center">
                        <Link to={`/jobs/${job.id}`} className="text-center mt-8 rounded bg-indigo-500 py-2 w-full text-white hover:bg-indigo-700 transition">Read More</Link>
                    </div>
            </div>
        </div>
    )
  }