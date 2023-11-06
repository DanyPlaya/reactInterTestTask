import { usePostsQuery } from "@/entities/post";
import { PostList } from "@/widgets/postList";

export const MainPage = () => {
  const { data: posts } = usePostsQuery();

  return <div>{posts ? <PostList posts={posts} /> : null}</div>;
};
