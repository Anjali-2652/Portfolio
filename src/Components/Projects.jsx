import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div className=' bg-[#171d32] text-white lg:border-t-2'>
        <div className='text-3xl p-5 font-bold'>Projects</div>

        <div className='flex overflow-x-scroll lg:border-b-2 lg:overflow-hidden lg:justify-center'>
          <Card/>
        


        </div>
      
    </div>
  )
}

export default Projects
