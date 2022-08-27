import { FC } from 'react'
import { Props } from '../utils/Interface'

const Card: FC<Props> = ({ title, image, description, link }) => {
  return (
    <div className='group max-w-[300px] cursor-pointer rounded-md border border-gray-900 p-6 transition-all hover:border-blue-600 2xl:max-w-[330px] '>
      <div className='flex items-center justify-between '>
        <h1 className='text-2xl font-normal transition-all group-hover:text-blue-600'>
          {title}
        </h1>
        <img src={image} alt='' className='w-[35px]' />
      </div>
      <p className='my-3 text-slate-400'>{description}</p>
    </div>
  )
}

export default Card
