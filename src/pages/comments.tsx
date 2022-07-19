import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  useGetCommentOfPostQuery,
  useGetPostByIdQuery,
  useGetUserByIdQuery,
} from '../redux/services/tableApi';
import Layout from '../components/layout';
import { Button, Card, Spinner, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loadPostById } from '../redux/features/posts/postsSlice';

const Comments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId, userId } = useSelector((state: RootState) => state.ids);
  const user = useSelector((state: RootState) => state.users.users).find(
    (user) => user.id === userId
  );
  const post = useGetPostByIdQuery(postId.toString()).data;
  const comments = useGetCommentOfPostQuery(postId.toString()).data;

  const editPost = () => {
    dispatch(loadPostById(post));
    navigate(`/edit/${postId}`, { replace: true });
  };

  return (
    <Layout>
      <Stack gap={3}>
        {post && user ? (
          <Card bg="dark" text="white" className="rounded-3 h-100">
            <Card.Header as="h5">
              <Stack direction="horizontal" gap={5}>
                Post
                <div className="vr" />
                {post.title}
                <Card.Subtitle className="mb-2 text-muted ms-auto">
                  Author {user.name}
                </Card.Subtitle>
              </Stack>
            </Card.Header>
            <Card.Body>{post.body}</Card.Body>
            <Card.Footer>
              <Stack direction="horizontal" gap={5}>
                <Button
                  variant="secondary"
                  className="align-bottom w-25"
                  onClick={editPost}
                >
                  Edit
                </Button>
                <Button variant="secondary" className="align-bottom w-25">
                  Delete
                </Button>
              </Stack>
            </Card.Footer>
          </Card>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <h1>Comments {comments && comments.length}</h1>
        {comments ? (
          comments.map((comment: Comment, i: number) => (
            <Card
              key={comment.id}
              bg="dark"
              text="white"
              className="rounded-3 h-100"
            >
              <Card.Header as="h5">
                <Stack direction="horizontal" gap={3}>
                  {i + 1}
                  <div className="vr" />
                  {comment.name}
                  <Card.Subtitle className="mb-2 text-muted ms-auto">
                    {comment.email}
                  </Card.Subtitle>
                </Stack>
              </Card.Header>
              <Card.Body>{comment.body}</Card.Body>
            </Card>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Stack>
    </Layout>
  );
};

export default Comments;
