import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSection from './ProjectSection.jsx'

function Project() {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <section
      className={`flex flex-col items-center justify-start md:px-9 mt-11 py-16 min-h-screen
        ${darkMode ? 'bg-[#0d0d0d] text-white' : 'bg-[#f9f9f9] text-gray-800'}`}
    >
      <h1 className="text-4xl font-bold mb-6 border-b-4 border-yellow-600 inline-block">
        Projects
      </h1>
      <p className="text-center max-w-2xl mb-10 text-lg">
        Here are some of the projects I’ve built
      </p>
      <ProjectSection />
    </section>
  )
}
export default Project;