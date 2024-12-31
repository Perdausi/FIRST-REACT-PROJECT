
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const JobPage = ({ deleteJobList }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const job = useLoaderData();


    const onDelete = (jobID) => {
        const confirm = window.confirm('are you sure you want to delete this job?');

        if(confirm){
            deleteJobList(jobID);
            navigate('/jobs');
        }

    }
  return (
    
        <div className='py-28 bg-indigo-100'>
                <section className='py-6 px-10'>
            <div>
                <Link to="/jobs" className='text-black'>
                     ---- Back to Job Listings
                </Link>
            </div>
        </section>

        <div className='flex flex-col gap-6 p-5 bg-indigo-100 sm:flex-row'>
                <div className='flex flex-col gap-6 w-full'>
                    <div className='container mx-auto flex flex-col p-5 gap-5 bg-white shadow-lg rounded'>
                        <p className='text-lg'>{job.type}</p>
                        <h1 className='text-4xl font-bold'>{job.title}</h1>
                        <p className='text-md text-red-500'>{job.location}</p>
                    </div>

                    <div className='container mx-auto flex flex-col p-5 gap-5 bg-white shadow-lg rounded'>
                        <p className='text-lg font-bold'>Job description</p>
                        <h1 className='text-md'>{job.description}</h1>
                        <p className='text-lg font-bold'>SALARY</p>
                        <p className='text-green-600 text-lg'>{job.salary} / Year</p>
                    </div>
                </div>

            <div className='flex flex-col container bg-white rounded shadow-lg p-5 sm:w-1/2'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-md'>Company Info</h1>
                    <h1 className='text-xl'>{job.company.name}</h1>
                    <p className='text-md border-b pb-3'>{job.company.description}</p>

                    <div>
                        <h1 className="text-lg">Contact Email</h1>
                        <h2 className='p-3 bg-indigo-100 font-bold rounded mb-2'>{job.company.contactEmail}</h2>
                        <h1 className="text-lg">Contact Phone</h1>
                        <h2 className='p-3 bg-indigo-100 font-bold rounded'>{job.company.contactPhone}</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-5 mt-5'>
                    <h1 className='text-lg font-bold'>Manage Job</h1>
                    <div className='p-2 flex items-center justify-center flex-col gap-3'>
                        <Link to={`/edit-job/${job.id}`} className='w-1/2 py-2 text-center rounded-full text-white font-bold bg-indigo-500 hover:bg-indigo-800 transition'>Edit Job</Link>
                        <button onClick={() => onDelete(job.id)} to="/s" className='w-1/2 py-2 text-center rounded-full text-white font-bold bg-red-600 hover:bg-red-800 transition'>Delete Job</button>
                    </div>
                </div>
            </div>
           
        </div>
    
        </div>
  )
}
    const jobLoader = async ({ params }) => {
        const res = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json();
        return data;
    }
export {JobPage as default, jobLoader};