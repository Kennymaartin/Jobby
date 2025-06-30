import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuOverlay = ({ links, onClose }) => {

    const linkClass = ({ isActive }) =>
        isActive
            ? "font-bold text-black"
            : "text-white hover:text-black"

    return (
        <div className='absolute top-20 left-0 w-full bg-[#3635355b] bg-opacity-70 z-50 backdrop-blur-sm md:hidden'
            style={{ animation: 'slideDown 0.3s ease-out forwards' }}
        >
            <ul className='flex flex-col py-4 items-center '>
                {links.map((link) => (
                    <li
                        className="block py-2 pl-3 pr-4 text-[#ADB7BE] border-black sm:text-xl rounded md:p-0 hover:text-white"
                        key={link.path}>
                        <NavLink
                            to={link.path}
                            onClick={onClose}
                            className={linkClass}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

MenuOverlay.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
};


export default MenuOverlay
