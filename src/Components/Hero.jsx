import React from 'react'

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      
      <h1 className="text-4xl font-bold text-gray-800">
        Hi, I'm Bhumi 
      </h1>

      <p className="mt-4 text-gray-600">
        Frontend Developer (React + Tailwind)
      </p>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
        View My Work
      </button>

    </div>
  )
}

export default Hero;