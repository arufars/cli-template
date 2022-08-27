import { motion } from 'framer-motion'

interface childrenProps {
  children: React.ReactNode
  className?: string
}

const Wrapper = ({ children, className }: childrenProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-10%", color: 'red' }}
        animate={{ opacity: 1, y: 0, color: 'white' }}
        transition={{ duration: .5, ease: 'easeInOut'}} // change duration
        className={className}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Wrapper
