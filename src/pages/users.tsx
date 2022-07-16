import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetUsersQuery } from '../redux/services/tableApi';
import { useEffect } from 'react';
import { loadUsers } from '../redux/features/users/usersSlice';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { loadUserById } from '../redux/features/userId/IdsSlice';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.data);
  const { userId } = useSelector((state: RootState) => state.ids);
  const { data } = useGetUsersQuery('users');

  const onClickUser = (id: number) => {
    dispatch(loadUserById(id));
    navigate('/user');
  };

  useEffect(() => {
    dispatch(loadUsers(data));
    console.log(users);
  }, [data, userId]);
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
              <tr key={user.id} onClick={() => onClickUser(user.id)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
              <td>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
              <td>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Users;
