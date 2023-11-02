import React from 'react'

const ProjectCard = ({
    title,
    description,
    thumbnail,
    link
}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
        <div className='p-4 pb-6 rounded-xl bg-richgray-700 flex flex-col gap-2'>
            <img src={thumbnail} alt={title} className='w-full h-[220px] bg-slate-600'/>
            <h1 className='font-medium text-2xl text-secondary-50'>{title}</h1>
            <p className='font-medium text-lg text-secondary-50 opacity-80'>{description}</p>
        </div>
    </a>
  )
}

export default ProjectCard
