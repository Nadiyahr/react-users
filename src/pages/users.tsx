import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetUsersQuery } from '../redux/services/tableApi';
import { useEffect } from 'react';
import { loadUsers } from '../redux/features/users/usersSlice';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import User from './user';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.data);
  const { data } = useGetUsersQuery('users');

  useEffect(() => {
    dispatch(loadUsers(data));
    console.log(users);
  });
  return (
    <Layout>
      <h1>Users</h1>
      <Table bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>City</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>
                  <h3>Profile</h3>
                  {/* <Link to='/user'>Profile</Link> */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <h3>Loading users from derver</h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Users;
