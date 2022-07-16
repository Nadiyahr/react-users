import { Alert, ListGroup, Spinner, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import { useGetUserByIdQuery } from '../redux/services/tableApi';
import { RootState } from '../redux/store';

const User: React.FC = () => {
  // const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.ids);
  const { data } = useGetUserByIdQuery(userId.toString());

  console.log(data);
  return (
    <Layout>
      {data ? (
        <Card bg="dark" text="white">
          <Card.Header as="h5">User # {data.id}</Card.Header>
          <Card.Body>
            <Card.Title>{data.username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {data.name}
            </Card.Subtitle>
            <Card.Text>
              <Stack direction="horizontal" gap={3}>
                <Card bg="dark" text="white">
                  <Card.Header as="h5">Contacts</Card.Header>
                  <Card.Body>
                    Phone: {data.phone}
                    <br />
                    Email: {data.email}
                    <br />
                    Address: {data.address.city} {data.address.zipcode}{' '}
                    {data.address.street} {data.address.suite}
                  </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                  <Card.Header as="h5">Company</Card.Header>
                  <Card.Body>
                    <br />
                    {data.company.name}
                    <br />
                    {data.company.catchPhrase}
                    <br />
                    {data.company.bs}
                  </Card.Body>
                </Card>
              </Stack>

              <br />
            </Card.Text>
            <Button variant="secondary">All posts of {data.username}</Button>
          </Card.Body>
        </Card>
      ) : (
        <div className="border d-flex mt-5 py-5 align-items-center justify-content-center">
          <Alert variant="light">
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
          </Alert>
        </div>
      )}
    </Layout>
  );
};

export default User;
