import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import dude from "../images/log.png";
import axios from 'axios'; // Import axios for API calls
import { useAuth } from '../Context.jsx';

export default function Login(props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indication
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Replace with your actual login API endpoint
      const response = await axios.post('http://ahmed11.runasp.net/api/Account/login', { userName, password });
      
      if (response.status === 200) {
        // Handle successful login
        const { token } = response.data; // Assuming the API returns a token
        localStorage.setItem('authToken', token); // Store token in localStorage
        props.setUserlogin(1);
        navigate('/home'); // Redirect to the home page
      }
    } catch (err) {
      // Handle errors from the API
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Character Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img 
            src={dude} 
            alt="Friendly character waving"
            className="max-w-md rounded-lg"
          />
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 max-w-md"
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-navy-900 mb-2">Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-500 bg-red-100 p-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="User Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaFacebook size={24} className="text-blue-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FcGoogle size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
