import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
