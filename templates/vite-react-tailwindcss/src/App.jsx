import { useEffect, useState } from 'react'
import { AudioPlayer, Card, Loading } from './components'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/App.css'
import Anim from '/hu-tao.png'



const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/nerufars/data/data-no-ts')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='container mx-auto flex-1 flex-col items-center justify-center p-10 2xl:p-24'>
          {/* Get Started */}
          <h1 className='text-center text-6xl '>
            Welcome to Template <span className='text-blue-500'>Self</span>
          </h1>

          <h1 className='m-10 text-center text-2xl'>
            Get started by editing{' '}
            <code className='rounded-[12px] bg-gray-800 py-1 px-2 '>
              src/App.jsx
            </code>
          </h1>

          <div className='flex justify-center'>
            <img
              className='w-[100px] cursor-pointer  opacity-90 transition-all hover:scale-150'
              src={Anim}
              alt='hu tao'
            />
          </div>

          <p className='mt-2 text-center dark:text-gray-600'>
            React-Vite-Tailwindcss
          </p>

          {/* Article */}
          <article className='container m-10 mx-auto flex max-w-[800px] flex-wrap items-center justify-center gap-x-4 gap-y-4'>
            <AnimatePresence exitBeforeEnter>
              {data ? (
                data?.map(({ title, image, description, link, id }) => (
                  <Card
                    title={title}
                    description={description}
                    image={image}
                    key={id}
                  />
                ))
              ) : (
                <Loading />
              )}
            </AnimatePresence>
          </article>

          {/*  */}
          <AudioPlayer />

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
      </motion.div>
    </>
  )
}

export default App
