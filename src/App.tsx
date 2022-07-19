import { Route, Routes } from 'react-router-dom';
import Posts from './pages/posts';
import Users from './pages/users';
import User from './pages/user';
import Comments from './pages/comments';
import EditForm from './pages/editForm';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/posts/*" element={<Posts />}>
        <Route path=":userId" element={<Posts />} />
      </Route>
      <Route path="/comments/:postId" element={<Comments />} />
      <Route path="/edit/:podtId" element={<EditForm />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default App;
