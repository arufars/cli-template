import { motion } from 'framer-motion'

const Card = ({ title, image, description, link }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className='group max-w-[320px] cursor-pointer rounded-md border border-gray-800 p-6 transition-all hover:border-blue-600 2xl:max-w-[330px] '
    >
      <div className='flex items-center justify-between '>
        <h1 className='text-2xl font-normal transition-all group-hover:text-blue-600'>
          {title}
        </h1>
        <img src={image} alt='' className='w-[35px]' />
      </div>
      <p className='my-3 text-slate-400'>{description}</p>
    </motion.div>
  )
}

export default Card
