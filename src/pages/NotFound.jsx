import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return(
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4"/>
        <h2 className="text-6xl fon-bold mb-5">404 Not Found</h2>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link 
        to="/"
        className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'
        >
          Go back
        </Link>
      </section>
    </>
  )
};

export default NotFound;