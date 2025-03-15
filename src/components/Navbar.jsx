import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-gray-900 dark:text-white">LOGO</span>
          </a>

          {/* Search Bar (Hidden on Mobile) */}
          <div className="hidden md:flex items-center w-1/3 relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="p-4 space-y-2">
            <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600">Services</a>
            <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600">Contact</a>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 pl-10 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
