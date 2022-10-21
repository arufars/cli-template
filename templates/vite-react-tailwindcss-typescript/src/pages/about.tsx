import { Link } from 'react-router-dom'
import { Wrapper } from '../components'

const About = () => {
  return (
    <Wrapper className='grid place-content-center h-screen'>
      <h1 className='text-3xl'>This About Page</h1>
      <Link to='/' className='hover:underline'>
        Go back to the homepage
      </Link>
    </Wrapper>
  )
}

export default About
