import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route index path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
