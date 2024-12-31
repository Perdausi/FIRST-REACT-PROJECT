import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { toast } from "react-toastify";


const App = () => {
  // add job 
  const addJob = async (newJob) => {
      const res = await fetch('/api/jobs',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      toast.success("Job added Successfully");
  }

// delete job

const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE'
    });
    toast.success('Job deleted Successfully');
    return;
}

 // update job 
 const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  toast.success("Job Update Successfully");
}


  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/" element={ <MainLayout /> }>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="add-job" element={<AddJobPage  addJobSubmit={addJob}/>} />
            <Route path='/jobs/:id' element={<JobPage  deleteJobList={deleteJob}/>} loader={jobLoader}  />
            <Route path='/edit-job/:id' element={<EditJobPage  editJobSubmit={updateJob}/>} loader={jobLoader}  />
            <Route path="*" element={<NotFound />} />
        </Route>

    )
);




  return (
    <RouterProvider router={router} />
  )
}

export default App
  