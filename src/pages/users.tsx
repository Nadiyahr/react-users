import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetDataQuery } from '../redux/services/tableApi';
import { loadUsers } from '../redux/features/users/usersSlice';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { setUserId } from '../redux/features/userId/IdsSlice';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users: User[] =
    useSelector((state: RootState) => state.users.users).length === 0
      ? useGetDataQuery('users').data
      : useSelector((state: RootState) => state.users.users);

  const loadPosts = (userId: number) => {
    dispatch(loadUsers(users));
    dispatch(setUserId(userId));
    navigate(`/posts/${userId}`, { replace: true });
  };

  return (
    <Layout>
      <h1>Users</h1>
      <Table bordered hover variant="dark">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user.id} onClick={() => loadPosts(user.id)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              {Array.from({ length: 3 }).map((_, i) => (
                <td key={i}>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Users;
