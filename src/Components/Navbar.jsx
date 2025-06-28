import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Images/logo.png";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 rounded-md px-3 py-2";

      const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setNavbarOpen(true)
    }
    const toggleMenuClose = () => {
        setNavbarOpen(false)
    }
  return (
    <>
      <nav className="bg-[#E32123]  border-b   bg-gradient-to-r from-[#8942FE] to-[#4393FD]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
              <Link to="/" className="flex flex-shrink-0 items-center mr-4">
                <img className="h-10 w-auto" src={logo} alt="React-Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Jobby
                </span>
              </Link>
              <div className='mobile-view block md:hidden'>
                    {
                        navbarOpen ? (
                            <button onClick={toggleMenuClose} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={toggleMenu} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
              <div className="md:ml-auto hidden md:block">
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
