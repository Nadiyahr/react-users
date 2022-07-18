import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  useGetCommentOfPostQuery,
  useGetPostByIdQuery,
  useGetUserByIdQuery,
} from '../redux/services/tableApi';

const Comments = () => {
  const { postId } = useSelector((state: RootState) => state.ids);
  const user = useSelector((state: RootState) => state.users);
  const post = useGetPostByIdQuery(postId.toString()).data;
  const comments = useGetCommentOfPostQuery(postId.toString()).data;

  console.log(postId);
  console.log(user);
  console.log(comments);

  return <h1>Comments {postId}</h1>;
};

export default Comments;
