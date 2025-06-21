import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-[#E32123]  border-b   bg-gradient-to-r from-[#8942FE] to-[#4393FD]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link to="/" className="flex flex-shrink-0 items-center mr-4">
                <img className="h-10 w-auto" src={logo} alt="React-Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Jobby
                </span>
              </Link>
              <div className="md:ml-auto">
                <div className="flex gap-2 space-x-2">
                  <NavLink className={linkClass} to="/">
                    Home
                  </NavLink>
                  <NavLink className={linkClass} to="/jobs">
                    Jobs
                  </NavLink>
                  <NavLink className={linkClass} to="/add-jobs">
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
