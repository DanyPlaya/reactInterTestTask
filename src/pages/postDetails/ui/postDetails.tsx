import { useParams } from "react-router-dom";

export const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();

  return <div>Post № {postId}</div>;
};
