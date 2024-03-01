import intl from '@/utils/locales/en.json';
const Header = () => {
  return (
    <header className='header p-4'>
      <div className='flex justify-between'>
        <div className='headerText'>{intl.bowerio}</div>
      </div>
    </header>
  );
};

export default Header;
