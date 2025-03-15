import React from 'react';

function Footer() {
  return (
    <div className="w-full h-auto bg-black text-white py-10">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-start pb-30 gap-6">
        
        {/* LOGO */}
        <div className="font-[Anton] text-[40px] sm:text-[60px]">LOGO</div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-[200px]">
            <div className="text-lg font-semibold">Location</div>
            <p className="text-[13px] text-gray-400">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="w-full sm:w-[200px]">
            <div className="text-lg font-semibold">Email</div>
            <p className="text-[13px] text-gray-400">example@random.com</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* About Section */}
        <div>
          <h6 className="mb-4 font-semibold uppercase">About Us</h6>
          <p className="text-gray-400 w-50 text-sm">
            Use rows and columns to organize your footer content.
          </p>
        </div>

        {/* Products */}
        <div>
          <h6 className="mb-4 font-semibold uppercase">Products</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400">Angular</a></li>
            <li><a href="#" className="text-gray-400">React</a></li>
            <li><a href="#" className="text-gray-400">Vue</a></li>
            <li><a href="#" className="text-gray-400">Laravel</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h6 className="mb-4 font-semibold uppercase">Useful Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400">Pricing</a></li>
            <li><a href="#" className="text-gray-400">Settings</a></li>
            <li><a href="#" className="text-gray-400">Orders</a></li>
            <li><a href="#" className="text-gray-400">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="mb-4 font-semibold uppercase">Contact</h6>
          <p className="text-gray-400 text-sm">info@example.com</p>
          <p className="text-gray-400 text-sm">+01 234 567 89</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 bg-neutral-800 p-4 text-center text-sm">
        © 2025 Copyright: <a href="#" className="font-semibold text-gray-400">YourCompany</a>
      </div>
    </div>
  );
}

export default Footer;
