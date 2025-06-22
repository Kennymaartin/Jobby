import { Link } from 'react-router-dom'
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

            <Card  bg=" bg-[#4393FD]">
              <h2 className="text-2xl">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React Jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Jobs
              </Link>
            </Card>
            <Card  bg="bg-[#8942FE]" className="border-2">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-jobs"
                className="inline-block bg-white hover:bg-gray-200 transition text-indigo-700 font-semibold rounded-lg px-4 py-2"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
