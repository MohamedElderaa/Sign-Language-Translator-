import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import { motion } from 'framer-motion';



export default function Signup() {
  const [dataExists, setDataExists] = useState(null);
  const [dataSuccess, setDataSuccess] = useState(null);
  const navigate = useNavigate();

  async function allData(data) {

    try {
      const dataSginUp = await axios.post('http://ahmed11.runasp.net/api/account/register', data);

      console.log(dataSginUp);
      console.log(dataSginUp.data.message);
      setDataSuccess(dataSginUp.data.message);
      setTimeout(function () {
        navigate('/login');
      }, 1000);
    } catch (err) {
      console.log('errosaty....', err);
      // Safely access error message
      let errorMessage = 'An unexpected error occurred during sign-up.';

      if (err.response && err.response.data) {
        if (Array.isArray(err.response.data)) {
          // Handle ASP.NET Identity error array
          errorMessage = err.response.data.map(e => e.description).join('\n');
        } else if (err.response.data.message) {
          errorMessage = err.response.data.message;
        } else {
          // Fallback for other formats
          errorMessage = JSON.stringify(err.response.data);
        }
      } else if (err.message) {
        errorMessage = err.message;
      }

      console.log(errorMessage);
      setDataExists(errorMessage);
    }

  }


  //data in formik
  let userData = {

    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const formikObj = useFormik({
    initialValues: userData,

    onSubmit: allData,
    validate: function (dataError) {
      const error = {};
      if (dataError.userName.length < 4 || dataError.userName.length > 12) {
        error.userName = 'Name must be from 4 and 12 characters'

      }
      if (dataError.email.includes('@') === false || dataError.email.includes('.') === false) {
        error.email = 'Email IN Vaild'


      }

      if (dataError.password.length < 6 || dataError.password.length > 12) {
        error.password = 'password must be from 6 and 12 characters'

      }
      if (dataError.confirmPassword !== dataError.password) {
        error.confirmPassword = 'password isnot match'
      }



      return error

    }



  });


  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
      <div className="container  text-center max-w-4xl mx-auto   ">



        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2  max-w-md "
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-navy-900 mb-2">Sign Up</h1>
          </div>
          {dataExists ? <div className='alert alert-danger'>{dataExists}</div> : ''}
          {dataSuccess ? <div className='alert alert-success '>{dataSuccess}</div> : ''}

          <form onSubmit={formikObj.handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                id='userName'
                value={formikObj.values.userName}
                onChange={formikObj.handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onBlur={formikObj.handleBlur}
              />
              {formikObj.errors.userName && formikObj.touched.userName ? <div className='alert alert-danger mt-2'>{formikObj.errors.userName}</div> : ''}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                id='email'
                value={formikObj.values.email}
                onChange={formikObj.handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onBlur={formikObj.handleBlur}
              />
              {formikObj.errors.email && formikObj.touched.email ? <div className='alert alert-danger mt-2'>{formikObj.errors.email}</div> : ''}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                id='password'
                value={formikObj.values.password}
                onChange={formikObj.handleChange}
                onBlur={formikObj.handleBlur}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              />
              {formikObj.errors.password && formikObj.touched.password ? <div className='alert alert-danger mt-2'>{formikObj.errors.password}</div> : ''}
            </div>
            <div>
              <input
                type="password"
                placeholder="confirm Password"
                id='confirmPassword'
                value={formikObj.values.confirmPassword}
                onChange={formikObj.handleChange}
                onBlur={formikObj.handleBlur}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              />
              {formikObj.errors.confirmPassword && formikObj.touched.confirmPassword ? <div className='alert alert-danger mt-2'>{formikObj.errors.confirmPassword}</div> : ''}
            </div>


            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
            >
              Sign Up Now !

            </button>
          </form>



        </motion.div>
      </div>
    </div>
  );
}