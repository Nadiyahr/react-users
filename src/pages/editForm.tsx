import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../components/layout';
import { useUpdatePostMutation } from '../redux/services/tableApi';
import { RootState } from '../redux/store';

const EditForm = () => {
  const { postById } = useSelector((state: RootState) => state.posts);
  const postId = postById.id.toString();
  const [form, setForm] = useState<Post>(postById);
  const [updatePost, responseInfo] = useUpdatePostMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value.toString(),
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(form);

    updatePost(form);

    console.log(responseInfo);
  };

  return (
    <Layout>
      <h1>Edit Post</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            value={form.body}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};
export default EditForm;
