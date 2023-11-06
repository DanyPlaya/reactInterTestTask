import { Post } from "../types/types";
import cls from "./postCard.module.scss";
type PostCardProps = {
  data: Post;
};
export const PostCard = (props: PostCardProps) => {
  const { data } = props;
  return (
    <div className={cls.postContainer}>
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  );
};
