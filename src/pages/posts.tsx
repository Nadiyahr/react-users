import { Alert, Button, Card, Col, Row, Spinner, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetDataQuery,
  useGetPostsOfUserQuery,
} from '../redux/services/tableApi';
import Layout from '../components/layout';
import { setPostId } from '../redux/features/userId/IdsSlice';
import { RootState } from '../redux/store';

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { userId } = useParams();
  const user = useSelector((state: RootState) => state.users.users).find(
    (user) => (userId ? user.id === +userId : 0)
  );
  const { data } = userId
    ? useGetPostsOfUserQuery(userId)
    : useGetDataQuery('posts');

  const loadComments = (postId: number) => {
    dispatch(setPostId(postId));
    navigate(`/comments/${postId}`, { replace: true });
  };

  return (
    <Layout>
      <h1>Posts of {user ? user.name : 'All users'}</h1>
      {data ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((post: Post) => (
            <Col key={post.id} className="gx-5">
              <Card
                bg="dark"
                text="white"
                className="text-center rounded-3 h-100"
              >
                <Card.Header as="h5">Post</Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Body>{post.body}</Card.Body>
                <Card.Footer>
                  <Stack gap={3}>
                    <Button
                      variant="secondary"
                      className="align-bottom"
                      onClick={() => loadComments(post.id)}
                    >
                      Go to the Commens
                    </Button>
                  </Stack>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex mt-5 py-5 align-items-center justify-content-center">
          <Alert variant="light">
            {Array.from({ length: 5 }).map((_, i) => (
              <Spinner key={i} animation="grow" variant="secondary" />
            ))}
          </Alert>
        </div>
      )}
    </Layout>
  );
};

export default Posts;
