/* eslint-disable react/jsx-no-comment-textnodes */
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Posts from './pages/posts';
import Users from './pages/users';
import Post from './pages/post';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
};

export default App;
