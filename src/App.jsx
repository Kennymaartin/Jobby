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
  
  // // Add New job
  // const addJob = async (newJob) => {
  //   const res = await fetch('/api/jobs',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newJob)
  //   });
  //   console.log(res)
  //   return;
  // };



  const BLOB_URL = "https://jsonblob.com/api/jsonBlob/1387835418564812800";

  const addJob = async (newJob) => {
    const res = await fetch(BLOB_URL);
    const jobs = await res.json();

     // Create job with unique ID
  const jobWithId = {
    ...newJob,
    id: Date.now().toString() // or uuidv4()
  };

    const updatedJobs = [...jobs, jobWithId];

    await fetch(BLOB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJobs)
    });
    return;
  };




  // //Delete Job
  // const deleteJob = async (id) => {
  //   const res = await fetch(`/api/jobs/${id}`,{
  //     method: 'DELETE',
  //   });
  //   console.log(res)
  // }


  const deleteJob = async (id) => {
    const res = await fetch(BLOB_URL);
    const jobs = await res.json();

    const updatedJobs = jobs.filter((job) => job.id !== id);

    await fetch(BLOB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJobs)
    });
    return;
  };



  // //update Job
  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`,{
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(job)
  //   });
  //   console.log(res)
  //   return;
  // };


  const updateJob = async (updatedJob) => {
    const res = await fetch(BLOB_URL);
    const jobs = await res.json();

    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );

    await fetch(BLOB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJobs)
    });
    return;
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/add-jobs' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-jobs/:id' element={<EditJob updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} errorElement={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
