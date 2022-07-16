import { Alert, Button, Card, Col, Row, Spinner, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostsOfUserQuery } from '../redux/services/tableApi';
import Layout from '../components/layout';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { loadPosts } from '../redux/features/posts/postsSlice';

const Posts = () => {
  let { userId } = useParams();
  const { data } = useGetPostsOfUserQuery(userId);

  return (
    <Layout>
      <h1>Posts</h1>
      {data ? (
        <Row xs={2} md={2} className="g-4">
          {data.map((post: Post) => (
            <Col key={post.id} className="gx-5">
              <Card
                bg="dark"
                text="white"
                style={{ width: '30rem' }}
                className="text-center rounded-3 h-100"
              >
                <Card.Header as="h5">Post # {post.id}</Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author {post.userId}
                </Card.Subtitle>
                <Card.Body>
                  {post.body}
                  <Card.Footer>
                    <Stack gap={3}>
                      <Button variant="secondary" className="align-bottom">
                        Commens
                      </Button>
                      {/* <Accordion defaultActiveKey={['0']}>
                       </Accordion> */}
                    </Stack>
                  </Card.Footer>
                </Card.Body>
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
