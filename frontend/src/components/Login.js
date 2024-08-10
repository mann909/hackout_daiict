import React, { useContext, useState } from 'react';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const loginSchema = z.object({
  identifier: z
    .string()
    .min()
    .refine(
      (value) =>
        /^[\d]{10}$/.test(value) || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      {
        message: 'Enter valid contact number or email',
      }
    ),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const value = useContext(AppContext)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = loginSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = validation.error.flatten().fieldErrors;
      setErrors(formattedErrors);
    } else {
      setErrors({});
      console.log(validation.data);
      sendData(validation.data)
      // Handle login logic here
    }
  };

  const sendData = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", data);
      if (response.status === 200) {
        value.setIsLoggedIn(true)
        console.log(response.data.data)
        value.setUser(response.data.data)
        if (response.data.data.type==='Customer'){
          navigate('/user')
        }else if ( response.data.data.type==='Farmer'){
          navigate('/farmer')
        }else if (response.data.data.type==='Agent'){
          navigate('/agent')
        }
      } else {
        console.log("Something went wrong !!");
      }
    } catch (err) {
      console.log("Error details:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <input
            name="identifier"
            value={formData.identifier}
            onChange={handleInputChange}
            placeholder="Contact Number or Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
