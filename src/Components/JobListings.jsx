import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false, reloadFlag = 0 }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = "https://jsonblob.com/api/jsonBlob/1387835418564812800";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data)
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [reloadFlag]);

  const displayedJobs = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <>
      <section className="bg-blue-50 px-4 py-10 bg-gradient-to-r from-[#8942FE] to-[#4393FD]">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#E32123]  mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayedJobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
  reloadFlag: PropTypes.number
};

export default JobListings;
