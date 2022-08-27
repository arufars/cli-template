import { useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AudioPlayer, Card, Loading, Wrapper } from './components'
import { Props } from './utils/Interface'
import { useShareState } from './hooks/Hooks'
import anim from '/hu-tao.png'
import './styles/App.css'

function App() {
  const [data, setData] = useState<Props[]>()
  const { setShowAudio } = useBetween(useShareState)

  const clickMe = () => setShowAudio(true)

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/nerufars/data/data')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <Wrapper>
      <div
        className='container mx-auto flex-1 flex-col items-center justify-center p-10 2xl:p-24
    '
      >
        <h1 className='text-center text-6xl '>
          Welcome to Template <span className='text-blue-500'>Self</span>
        </h1>

        <h1 className='m-10 text-center text-2xl'>
          Get started by editing{' '}
          <code className='rounded-[12px] bg-gray-800 py-1 px-2 '>
            src/App.tsx
          </code>
        </h1>

        <div className='flex justify-center'>
          <img
            onClick={clickMe}
            className='w-[100px] cursor-pointer  opacity-90 transition-all hover:scale-150'
            src={anim}
            alt='hu tao'
          />
        </div>

        <AudioPlayer />

        <p className='mt-2 flex flex-col text-center dark:text-gray-600'>
          React-Typescript-Vite-Tailwindcss
          <Link to='/about'>About Page</Link>
        </p>

        <article className='container m-10 mx-auto flex max-w-[800px] flex-wrap items-center justify-center gap-x-4 gap-y-4  '>
          {data ? (
            data?.map(({ title, image, description, link, id }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: i * 0.3 }}
              >
                <Card title={title} description={description} image={image} />
              </motion.div>
            ))
          ) : (
            <Loading />
          )}
        </article>

        <footer>
          <p className='text-center text-gray-500'>
            © {new Date().getFullYear()}, Built template with{' '}
            <a
              className='hover:text-blue-600 hover:underline'
              href='https://github.com/Marineux/cli-template-doc'
            >
              Marineux
            </a>
          </p>
        </footer>
      </div>
    </Wrapper>
  )
}

export default App
