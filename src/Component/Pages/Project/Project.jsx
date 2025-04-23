import React from 'react'
import { useSelector } from 'react-redux'

function Project() {

  const darkMode = useSelector((state)=> state.theme.darkMode);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center justify-center pb-11 md:pb-0 px-5 mx-auto text-center md:text-left 
        ${darkMode ? "bg-black text-white" : "bg-white text-gray-800"} 
        min-h-screen md:h-[85vh] lg:h-[90vh] gap-5 md:gap-9 pt-28 md:pt-0`}
      >
        Project
      </div>
    </>
  )
}

export default Project;