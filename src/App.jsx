import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage";
import EditJob from "./pages/EditJobPage";

const App = () => {
  //Add New job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    console.log(res)
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    console.log(res)
  }

  //update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    console.log(res)
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-jobs' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-jobs/:id' element={<EditJob updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
