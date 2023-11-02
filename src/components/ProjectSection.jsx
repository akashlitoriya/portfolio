import React from 'react'
import { project } from '../data/Project'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <div className='w-full min-h-fit bg-primary h-fit p-6'>
      <div className='max-w-maxContent mx-auto'>
        <h1 className='font-semibold text-4xl font-mont text-white mb-7'>Projects</h1>
          <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-2 md:grid-rows-1 gap-4'>
            {
              project.map((item, index) => (
                <ProjectCard key={index} {...item}/>
              ))
            }
          </div>
      </div>
      
    </div>
  )
}

export default ProjectSection
