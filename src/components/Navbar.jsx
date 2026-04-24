import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo3.png';
import { useAuth } from '../Context.jsx';
import { useContext } from 'react';

export default function Navbar(props) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className='flex items-center justify-between'>
            <Link to="/" className="">
              <img src={logo} alt="app logo" className='w-14 ms-5' />
            </Link>
            <Link to="/" className="">
              <h1 className='ms-3 ab'>free talk</h1>
            </Link>
          </div>

          <div className="flex space-x-8">
            {props.userlogin ? <>
              <Link
                to="/Translator"
                className={`${isActive('/Translator') ? 'text-primary font-semibold' : 'text-gray-600'
                  } hover:text-primary transition-colors`}
              >
                Translator
              </Link>
              <Link
                to="/home"
                className={`${isActive('/home') ? 'text-primary font-semibold' : 'text-gray-600'
                  } hover:text-primary transition-colors`}
              >
                Home
              </Link>

            </> : null}
            <Link
              to="/app"
              className={`${isActive('/app') ? 'text-primary font-semibold' : 'text-gray-600'
                } hover:text-primary transition-colors`}
            >
              Our App
            </Link>

            {!props.userlogin ? <>
              <Link
                to="/login"
                className={`${isActive('/login') ? 'text-primary font-semibold' : 'text-gray-600'
                  } hover:text-primary transition-colors`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${isActive('/Signup') ? 'text-primary font-semibold' : 'text-gray-600'
                  } hover:text-primary transition-colors`}
              >
                Signup
              </Link>
            </> : null}


          </div>
        </div>
      </div>
    </motion.nav>
  );
}