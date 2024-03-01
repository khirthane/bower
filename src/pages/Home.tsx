import intl from '@/utils/locales/en.json';

const Home = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <h2 className='text-3xl'>{intl.welcomeToBower}</h2>
    </div>
  );
};

export default Home;
