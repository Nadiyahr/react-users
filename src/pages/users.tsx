import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetDataQuery } from '../redux/services/tableApi';
import { useEffect } from 'react';
import { loadUsers } from '../redux/features/users/usersSlice';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { setUserId } from '../redux/features/userId/IdsSlice';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const { data } = useGetDataQuery('users');
  console.log(data);

  useEffect(() => {
    dispatch(loadUsers(data));
  }, [data]);
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
              <tr key={user.id}>
                <td>
                  <Link
                    to={`/posts/${user.id}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    {user.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/posts/${user.id}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    {user.username}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/posts/${user.id}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    {user.address.city}
                  </Link>
                </td>
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
