import React from 'react'

function Navbar() {
  return (
     <nav className="bg-blue-500 text-white px-6 py-3 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">MyApp</h1>

      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar