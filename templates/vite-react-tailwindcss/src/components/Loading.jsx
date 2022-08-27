import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      transition={{
        layout: { duration: 1},
      }}
      layout="position"
      className='flex flex-col items-center justify-center gap-y-4 text-center'
    >
      <img src='/cibii-hu-tua.png' alt='' className='w-[300px]' />
      <h1>Please Wait.......</h1>
    </motion.div>
  )
}

export default Loading
