import { NavBarLinks } from '@/constants';
import { INavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const LeftColumn = () => {
  const { pathname } = useLocation();
  return (
    <div className='leftColumn hidden md:flex p-6 flex-col lg:w-80 md:w-60'>
      <Logo width={50} />
      <div className='navContainer mt-4'>
        {NavBarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <li key={link.route} className={`navigationLink ${isActive ? 'isActive' : ''}`}>
              <NavLink to={link.route} className='navLink'>
                <img src={link.imgURL} alt={link.label} width={18} />
                <span className='ml-2 sm:hidden md:block'>{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default LeftColumn;
