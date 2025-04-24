import React from 'react'
import { projectFile } from './project.js'
import {Github} from 'lucide-react';

function ProjectSection() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 py-10 min-h-screen'>
      {
        projectFile.map((item, index) => (
          <div key={index} className='bg-[#1f1f1f] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-600 transition duration-300 ease-in-out'>
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-[200px] object-cover'
            />
            <div className='p-4 flex flex-col justify-between '>
              <h2 className='text-xl font-semibold text-pink-400 mb-2 text-center'>{item.name}</h2>
              <p className='text-sm text-gray-300 text-center mb-3'>{item.desc}</p>
              <h1 className='mb-3 text-center text-green-600'><span className='font-bold text-yellow-600 px-1'>Tech Stack: </span>{item.techstack}</h1>

              <div className="flex justify-center gap-4 mt-auto">
                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-pink-600 text-white rounded-lg text-[16px] flex flex-row px-4 py-2 hover:bg-pink-500 transition'
                  >
                    <span><Github/></span>
                  </a>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-green-600 text-white px-4 py-2 rounded-lg text-[16px] hover:bg-green-500 transition'
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProjectSection;