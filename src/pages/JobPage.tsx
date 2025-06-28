import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const tweetText = encodeURIComponent(
    `🚀 New job opening: ${job.title} in ${job.location}! Looking for your next opportunity? This might be the perfect fit. 👇\n\nApply now: https://jobby-murex.vercel.app/jobs/${job.id}`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;



  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?')

    if (!confirm) return;

    deleteJob(jobId);
    toast.success('Job deleted successfully');

    navigate('/jobs');
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6  flex justify-between items-stretch font-bold text-xl">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft /> Back to Job Listings
          </Link>
          <div>
            <Link
              to={tweetUrl}
              target="_blank"
              className="h-[36px] bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Share On X
            </Link>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.info("Job link copied to clipboard");
              }}
              className="ml-2 text-sm text-blue-700 hover:underline hover:cursor-pointer"
            >
              Copy Link
            </button>

          </div>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex gap-2 items-center align-middle justify-center md:justify-start">
                  <FaLocationArrow />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary}</p>
              </div>
            </main>
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job?.company?.name}</h2>
                <p className="my-2">{job?.company?.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company?.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company?.contactPhone}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <div className=" ">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>

                </div>

                <Link
                  to={`/edit-jobs/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  aria-label="Delete job posting"
                  className="bg-[#E32123] hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};


const jobLoader = async ({ params }) => {
  const res = await fetch("https://jsonblob.com/api/jsonBlob/1387835418564812800");
  const jobs = await res.json();

  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    throw new Response("Job not found", { status: 404 });
  }

  return job;
};



export { JobPage as default, jobLoader };
