import React from 'react';
import Card from './Card';


function Projects() {
  return (
    <div className='bg-gray-100 min-h-screen p-6'>
        <h1 className='text-3xl font-bold text-center mb-8'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card title="project 1" desc="React + Tailwind project"/>
            <Card title="Project 2" desc="API integration app" />
            <Card title="Project 3" desc="Portfolio website" />
           
        </div>
    </div>
  );
}

export default Projects;