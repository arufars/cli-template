import Image from 'next/image';


export interface PropsCard {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const Card:React.FC<PropsCard> = (data) => {
  return (
    <>
      <a
        key={data.id}
        href={data.href}
        className='group hover:border-blue-500 m-4 p-6 text-left border border-gray-600 rounded-xl max-w-xs'>
        <div className='flex items-center justify-between'>
          <h2 className='group-hover:text-blue-500 mb-4 text-2xl'>
            {data.title}
          </h2>
          <Image
            src={data.image}
            width={50}
            height={50}
            objectFit='contain'
            alt='image'
          />
        </div>
        <p className='dark:text-gray-400 text-xl leading-normal  '>
          {data.description}
        </p>
      </a>
    </>
  );
};

export default Card;
