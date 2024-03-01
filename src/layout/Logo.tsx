import intl from '@/utils/locales/en.json';
import { Link } from 'react-router-dom';

const Logo = ({ width = 50 }) => {
  return (
    <div className='logo flex justify-center'>
      <Link to='/'>
        <img src='/assets/bower-logo.svg' className='inline' width={width} />
        <h1 className='logoText'>{intl.bower}</h1>
      </Link>
    </div>
  );
};

export default Logo;
