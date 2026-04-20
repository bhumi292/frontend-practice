import React from 'react'

function Card({title, desc}) {
  return (
    <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center'>
        <h2 className='text-xl font-bold text-gray-800'>
            {title}
        </h2>
        <p className='mt-2 text-gray-200'>
            {desc}
        </p>
        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
            view project
        </button>
    </div>
   
  )
}

export default Card;