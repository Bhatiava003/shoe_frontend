import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-teal-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-6xl mr-2.5">
          <a href="/">shoeKART</a>
        </div>
        {/* search bar */}
        <div className="flex-1">
          <input
            type="text"
            className="w-3/4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 ml-2.5"
            placeholder="Search..."/>
          <button className="bg-yellow-400 text-white px-4 py-1 rounded-r hover:bg-blue-700 focus:outline-none">
            Search
          </button> 
        </div>

        {/* Navigation List */}
        <ul className="hidden md:flex space-x-4 mr-1.5">
          <li>
           <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </li>
        </ul>
    </div>
    </nav>
  )
}
