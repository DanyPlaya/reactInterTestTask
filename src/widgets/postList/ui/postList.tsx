import { Post, PostCard } from "@/entities/post";
import cls from "./postList.module.scss";
type PostListProps = {
  posts: Post[];
};
export const PostList = (props: PostListProps) => {
  const { posts } = props;
  return (
    <div className={cls.root}>
      {posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
};
