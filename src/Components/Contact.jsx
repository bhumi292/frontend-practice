import React from 'react'

function Contact() {
  return (
   <div className="py-16 bg-gray-100 text-center">
      
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="block mx-auto mt-6 p-2 border rounded w-80"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="block mx-auto mt-3 p-2 border rounded w-80"
      />

      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
        Send
      </button>

    </div>
  )
}

export default Contact