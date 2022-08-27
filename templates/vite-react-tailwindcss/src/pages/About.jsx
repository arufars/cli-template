import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatedPage } from '../components'

const About = () => {
  return (
    <div className={`min-h-screen ${AnimatedPage ? 'overflow-hidden' : null}`}>
      <AnimatedPage>
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <h1 className='mb-8 text-6xl text-blue-600'>About</h1>
          <p>
            <Link to='/'>Back Home</Link>
          </p>
        </div>
      </AnimatedPage>
    </div>
  )
}

export default About
