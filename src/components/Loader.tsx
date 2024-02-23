const Loader = ({ size = 30 }) => {
  return (
    <span className='flex justify-center'>
      <img src='/assets/icons/loader.svg' width={size} />
    </span>
  );
};

export default Loader;
