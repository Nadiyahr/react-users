import { Alert, Spinner, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import { useGetUserByIdQuery } from '../redux/services/tableApi';
import { RootState } from '../redux/store';

const User: React.FC = () => {
  let { userId } = useParams();
  // const { userId } = useSelector((state: RootState) => state.ids);
  const { data } = useGetUserByIdQuery(userId);

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
            </Card.Text>
            <Button variant="secondary">All posts of {data.username}</Button>
          </Card.Body>
        </Card>
      ) : (
        <div className="d-flex mt-5 py-5 align-items-center justify-content-center">
          <Alert variant="light">
            {Array.from({ length: 3 }).map((_, i) => (
              <Spinner key={i} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ))}
          </Alert>
        </div>
      )}
    </Layout>
  );
};

export default User;
