import React from 'react'

function Card() {
  return (
    <div className='h-screen bg-red-100 flex justify-center items-center'>
        <div className='bg-white p-6 rounded shadow w-80'>
            <h2 className='text-xl font-bold text-yellow-800 '>
                My Project
            </h2>
            <p className="mt-2 text-gray-600">
                This is my first Tailwind CSS practice card.
            </p>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View More
            </button>
        </div>   
    </div>
  )
}

export default Card;