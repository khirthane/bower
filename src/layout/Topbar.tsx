import { NavBarLinks } from '@/constants';
import { INavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Topbar = () => {
  const { pathname } = useLocation();
  return (
    <div className='topbar md:hidden'>
      <div className='ml-4'>
        <Logo width={40} />
      </div>
      <div className='navContainer flex'>
        {NavBarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <li key={link.route} className={`navigationLink mt-1 ${isActive ? 'isActive' : ''}`}>
              <NavLink to={link.route} className='navLink'>
                <img src={link.imgURL} alt={link.label} width={18} />
              </NavLink>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
