import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export interface WaifuProps {
  _id: string;
  name: string;
  background?: string;
  school: string;
  age: string;
  photoUrl: string;
}

const Waifu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='text-center min-h-screen'>
      <Link href='/'>
        <h1 className='text-4xl py-10  cursor-pointer hover:underline'>Anim</h1>
      </Link>
      <article className='flex flex-wrap justify-center items-center '>
        {data?.map((waifu: WaifuProps) => (
          <div key={waifu._id} className='m-10'>
            <img src={waifu.photoUrl} alt='' />
            <div className='text-left text-gray-400'>
              <h1 className=' text-3xl mt-2'>{waifu.name}</h1>
              <p>School : {waifu.school}</p>
              <p>{waifu.age}</p>
            </div>
          </div>
        ))}
      </article>

      <footer className='p-10'>
        <a
          href={process.env.NEXT_PUBLIC_URL}
          className='dark:text-gray-500 italic'>
          Check Out Api This Anim
        </a>
      </footer>
    </div>
  );
};

export default Waifu;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/characters');
  const data: WaifuProps[] = await res.json();

  return {
    props: {
      data,
    },
  };
};
