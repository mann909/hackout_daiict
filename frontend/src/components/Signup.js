import React, { useState } from 'react';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const signupSchema = z.object({
  name: z.string().min(1, { message: 'Name must not be empty' }),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNumber: z
    .string()
    .regex(/^\d{10}$/, { message: 'Contact number must contain only 10 digits' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  otp: z.string().optional(),
  userType: z.enum(['Farmer', 'Agent', 'Customer'],{message:"Please select 1 option"}),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    password: '',
    otp: '',
    userType: '',
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetOtp = () => {
    setOtpSent(true);
    // Implement OTP logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = signupSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = validation.error.flatten().fieldErrors;
      setErrors(formattedErrors);
    } else {
      setErrors({});
      console.log(validation.data);
      console.log(1111)
      sendData(validation.data)
      // Handle signup logic here
    }
  };

  const sendData = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/signup", data);
      if (response.status === 200) {
        alert("Signup Successful");
        navigate("/login")
      } else {
        console.log("Something went wrong !!");
      }
    } catch (err) {
      console.log("Error details:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex justify-center items-center py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Your Contact Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            onClick={handleGetOtp}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            GET OTP
          </button>
          <input
            name="otp"
            value={formData.otp}
            onChange={handleInputChange}
            placeholder="Enter OTP"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-600">Sign Up as:</label>
          <div className="flex justify-around">
            <label className="flex items-center">
              <input
                name="userType"
                type="radio"
                value="Farmer"
                onChange={handleInputChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Farmer</span>
            </label>
            <label className="flex items-center">
              <input
                name="userType"
                type="radio"
                value="Land broker"
                onChange={handleInputChange}
                className="form-radio text-blue-500"
                
              />
              <span className="ml-2">Agent</span>
            </label>
            <label className="flex items-center">
              <input
                name="userType"
                type="radio"
                value="Customer"
                onChange={handleInputChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Customer</span>
            </label>
          </div>
          {errors.userType && (
            <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
