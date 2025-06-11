import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = ({
  title = "Find a Paying Hobby",
  subtitle = "Find the Best Job that fits your skill set",
}) => {
  return (
    <>
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>
          </div>
        <div className="mt-6">
          <Link
            to="jobs"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
