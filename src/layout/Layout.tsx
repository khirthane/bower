import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import LeftColumn from './LeftColumn';
import Topbar from './Topbar';
import './layout.scss';

const Layout = () => {
  return (
    <main className='flex flex-col h-screen'>
      <Topbar />
      <div className='flex flex-1 overflow-hidden'>
        <LeftColumn />
        <div className='flex flex-1 flex-col'>
          <Header />
          <div className='flex flex-1 overflow-y-auto px-4'>
            <div className='w-full'>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Layout;
