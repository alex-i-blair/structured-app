import { usePosts } from '../../context/UserContext';
import PostCard from './PostCard';

export default function AllPosts() {
  const { posts } = usePosts();
  return (
    <>
      <div className="listView">
        <ul>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
}
