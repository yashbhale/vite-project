import React from 'react';
import Navbar from './Navbar';

const Schoolregister = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="flex items-center justify-center min-h-screen relative">
        <img
          src="https://c1.wallpaperflare.com/preview/245/878/523/building-education-florida-photos.jpg"
          alt="Sample Image"
          className="w-full h-full object-cover absolute -z-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-md rounded-lg relative z-10">
          <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">UDISE No</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your UDISE+ No"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schoolregister;
